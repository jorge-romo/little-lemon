// import { screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import { act, fireEvent, screen, render } from '../../utils/tests-ts';
import {
  submitAPI,
  fetchTimeSlotsAPI,
  fetchOccasionsAPI,
} from '../../utils/api';
import BookingForm from './BookingForm';

jest.mock('../../utils/api');

describe('BookingForm', () => {
  test('All fields should be exists after initialization', () => {
    act(() =>
      render(
        <BookingForm
          getTimeSlots={(date) => fetchTimeSlotsAPI(new Date(date))}
          getOccasions={fetchOccasionsAPI}
          onSubmitForm={submitAPI}
        />
      )
    );

    const choseDateLabel = screen.getByText('Date');
    expect(choseDateLabel).toBeInTheDocument();
    const choseDateField = screen.getByTestId('date-input');
    expect(choseDateField).toBeInTheDocument();

    const choseTimeLabel = screen.getByText('Time');
    expect(choseTimeLabel).toBeInTheDocument();
    const choseTimeField = screen.getByTestId('time-input');
    expect(choseTimeField).toBeInTheDocument();

    const numberGuestLabel = screen.getByText('Number of Guests');
    expect(numberGuestLabel).toBeInTheDocument();
    const numberGuestField = screen.getByTestId('guests-input');
    expect(numberGuestField).toBeInTheDocument();

    const occasionLabel = screen.getByText('Occasion');
    expect(occasionLabel).toBeInTheDocument();
    const occasionField = screen.getByTestId('occasion-input');
    expect(occasionField).toBeInTheDocument();

    const specialRequestLabel = screen.getByText('Special Request');
    expect(specialRequestLabel).toBeInTheDocument();
    const specialRequestField = screen.getByTestId('special-request-input');
    expect(specialRequestField).toBeInTheDocument();

    const firstNameLabel = screen.getByText('First Name');
    expect(firstNameLabel).toBeInTheDocument();
    const firstNameField = screen.getByTestId('first-name-input');
    expect(firstNameField).toBeInTheDocument();

    const lastNameLabel = screen.getByText('Last Name');
    expect(lastNameLabel).toBeInTheDocument();
    const lastNameField = screen.getByTestId('last-name-input');
    expect(lastNameField).toBeInTheDocument();

    const emailLabel = screen.getByText('Email');
    expect(emailLabel).toBeInTheDocument();
    const emailField = screen.getByTestId('email-input');
    expect(emailField).toBeInTheDocument();

    const phoneLabel = screen.getByText('Phone Number');
    expect(phoneLabel).toBeInTheDocument();
    const phoneField = screen.getByTestId('phone-input');
    expect(phoneField).toBeInTheDocument();
  });

  // test('Step 2 fields should be exists after click next', () => {
  //   render(
  //     <BookingForm
  //       defaultValues={{
  //         date: new Date().toDateString(),
  //         guests: 1,
  //         occasion: '',
  //         time: '16:00',
  //         specialRequest: '',
  //       }}
  //       getTimeSlots={(date) => fetchTimeSlotsAPI(new Date(date))}
  //       getOccasions={fetchOccasionsAPI}
  //       onSubmitForm={submitAPI}
  //     />
  //   );

  //   const nextBtn = screen.getByTestId('next-button');
  //   expect(nextBtn).toBeInTheDocument();

  //   fireEvent.click(nextBtn);
  // });
});
