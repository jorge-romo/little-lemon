import { fireEvent, render, screen, act, within } from '../../utils/tests-ts';
import BookingForm from './BookingForm';

const mockGetOccasions = jest.fn(() =>
  Promise.resolve(['Birthday', 'Anniversary'])
);
const mockGetTimeSlots = jest.fn(() => Promise.resolve(['6:00 PM', '7:00 PM']));
const mockOnSubmitForm = jest.fn();

describe('BookingForm Component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders without crashing', async () => {
    await act(async () =>
      render(
        <BookingForm
          getOccasions={mockGetOccasions}
          getTimeSlots={mockGetTimeSlots}
          onSubmitForm={mockOnSubmitForm}
        />
      )
    );

    expect(screen.getByTestId('date-input')).toBeInTheDocument();
    expect(screen.getByTestId('time-input')).toBeInTheDocument();
    expect(screen.getByTestId('guests-input')).toBeInTheDocument();
    expect(screen.getByTestId('occasion-input')).toBeInTheDocument();
    expect(screen.getByTestId('special-request-input')).toBeInTheDocument();
    expect(screen.getByTestId('first-name-input')).toBeInTheDocument();
    expect(screen.getByTestId('last-name-input')).toBeInTheDocument();
    expect(screen.getByTestId('email-input')).toBeInTheDocument();
    expect(screen.getByTestId('phone-input')).toBeInTheDocument();
    expect(screen.getByTestId('back-button')).toBeInTheDocument();
    expect(screen.getByTestId('next-button')).toBeInTheDocument();
    expect(screen.getByTestId('submit-button')).toBeInTheDocument();
  });

  it('occasion list should be fetched and displayed', async () => {
    await act(async () =>
      render(
        <BookingForm
          getOccasions={mockGetOccasions}
          getTimeSlots={mockGetTimeSlots}
          onSubmitForm={mockOnSubmitForm}
        />
      )
    );

    expect(mockGetOccasions).toHaveBeenCalled();

    const selectRoot = screen.getByTestId('occasion-input').closest('div')!;
    expect(selectRoot).toBeInTheDocument();
    const selectTrigger = within(selectRoot).getByRole('combobox');
    expect(selectTrigger).toBeInTheDocument();
    await act(async () => fireEvent.click(selectTrigger));

    const selectListRoot = screen.queryByRole('listbox')!;
    expect(selectListRoot).toBeInTheDocument();
    expect(within(selectListRoot).getByText('Birthday')).toBeInTheDocument();
    expect(within(selectListRoot).getByText('Anniversary')).toBeInTheDocument();
  });

  it('time list fetch api should be called when date changes', async () => {
    await act(async () =>
      render(
        <BookingForm
          getOccasions={mockGetOccasions}
          getTimeSlots={mockGetTimeSlots}
          onSubmitForm={mockOnSubmitForm}
        />
      )
    );

    await act(async () =>
      fireEvent.change(screen.getByTestId('date-input'), {
        target: { value: '2025-01-01' },
      })
    );
    expect(mockGetTimeSlots).toHaveBeenCalled();

    const selectRoot = screen.getByTestId('time-input').closest('div')!;
    expect(selectRoot).toBeInTheDocument();
    const selectTrigger = within(selectRoot).getByRole('combobox');
    expect(selectTrigger).toBeInTheDocument();
    await act(async () => fireEvent.click(selectTrigger));

    const selectListRoot = screen.queryByRole('listbox')!;
    expect(selectListRoot).toBeInTheDocument();
    expect(within(selectListRoot).queryByText('6:00 PM')).toBeInTheDocument();
    expect(within(selectListRoot).queryByText('7:00 PM')).toBeInTheDocument();
  });

  it('validates required fields before proceeding to next step', async () => {
    await act(async () =>
      render(
        <BookingForm
          getOccasions={mockGetOccasions}
          getTimeSlots={mockGetTimeSlots}
          onSubmitForm={mockOnSubmitForm}
        />
      )
    );

    await act(async () => fireEvent.click(screen.getByTestId('next-button')));

    expect(screen.getByText('Date is required')).toBeInTheDocument();
    expect(screen.getByText('Time is required')).toBeInTheDocument();
  });

  it('validate with schema for select fields', async () => {
    await act(async () =>
      render(
        <BookingForm
          defaultValues={{
            date: '2025-01-01',
            time: '00:00',
            occasion: 'Nothing',
          }}
          getOccasions={mockGetOccasions}
          getTimeSlots={mockGetTimeSlots}
          onSubmitForm={mockOnSubmitForm}
        />
      )
    );

    await act(async () => fireEvent.click(screen.getByTestId('next-button')));

    expect(screen.getByText('Please select a valid time')).toBeInTheDocument();
    expect(
      screen.getByText('Please select a valid occasion')
    ).toBeInTheDocument();
  });

  it('validates required fields in second step before submit form', async () => {
    await act(async () =>
      render(
        <BookingForm
          defaultValues={{
            date: '2025-01-01',
            time: '6:00 PM',
            guests: 2,
          }}
          getOccasions={mockGetOccasions}
          getTimeSlots={mockGetTimeSlots}
          onSubmitForm={mockOnSubmitForm}
        />
      )
    );

    await act(async () => fireEvent.click(screen.getByTestId('next-button')));

    /** @see https://github.com/testing-library/jest-dom/issues/202#issuecomment-671132519 */
    expect(screen.queryByText('Date is required')).not.toBeInTheDocument();
    expect(screen.queryByText('Time is required')).not.toBeInTheDocument();

    await act(async () => fireEvent.click(screen.getByTestId('submit-button')));

    expect(screen.getByText('First name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });

  it('submits the form successfully when valid data is provided', async () => {
    await act(async () =>
      render(
        <BookingForm
          defaultValues={{
            date: '2025-01-01',
            time: '6:00 PM',
            guests: 2,
            occasion: 'Anniversary',
            firstName: 'John',
            lastName: 'Doe',
            phone: '(123) 456-7890',
            email: 'john.doe@example.com',
          }}
          getOccasions={mockGetOccasions}
          getTimeSlots={mockGetTimeSlots}
          onSubmitForm={mockOnSubmitForm}
        />
      )
    );

    await act(async () => fireEvent.click(screen.getByTestId('next-button')));
    await act(async () => fireEvent.click(screen.getByTestId('submit-button')));

    expect(mockOnSubmitForm).toHaveBeenCalled();
  });
});
