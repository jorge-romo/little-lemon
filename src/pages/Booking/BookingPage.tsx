import { useState, type FC } from 'react';
import { useTheme } from 'styled-components';
import {
  PageContainer,
  BookingForm,
  BookingConfirmation,
  BookingFormData,
  GetTimeSlotsHandler,
  SubmitFormHandler,
  GetOccasionsHandler,
} from '../../components';
import {
  fetchTimeSlotsAPI,
  fetchOccasionsAPI,
  submitAPI,
} from '../../utils/api';
import { FormContainer } from './styles';

enum BookingStatus {
  INIT = 'init',
  SUBMITTED = 'submitted',
  COMPLETED = 'completed',
  ERROR = 'error',
}

const BookingPage: FC = () => {
  const theme = useTheme();
  const [status, setStatus] = useState<BookingStatus>(BookingStatus.INIT);
  const [formData, setFormData] = useState<BookingFormData | null>(null);

  const getOccasions: GetOccasionsHandler = () => {
    return fetchOccasionsAPI();
  };

  const getTimeSlots: GetTimeSlotsHandler = (date) => {
    return fetchTimeSlotsAPI(new Date(date));
  };

  const formSubmitHandler: SubmitFormHandler = (data) => {
    setStatus(BookingStatus.SUBMITTED);
    setFormData(data);
  };

  const formEditHandler = () => {
    setStatus(BookingStatus.INIT);
  };

  const formConfirmHandler = () => {
    if (!formData) {
      setStatus(BookingStatus.ERROR);
      return;
    }

    submitAPI(formData)
      .then((res) => {
        if (res) {
          setStatus(BookingStatus.COMPLETED);
        } else {
          setStatus(BookingStatus.ERROR);
        }

        setFormData(null);
      })
      .catch((_err) => {
        setStatus(BookingStatus.ERROR);
        setFormData(null);
      });
  };

  return (
    <PageContainer
      style={{ backgroundColor: theme.colors.secondary_background }}
    >
      <div className='section-inner'>
        {status === BookingStatus.INIT ? (
          <FormContainer>
            <h1 className='head-text heading-2'>Reserve a table</h1>
            <BookingForm
              className='form-wrapper'
              defaultValues={formData}
              getOccasions={getOccasions}
              getTimeSlots={getTimeSlots}
              onSubmitForm={formSubmitHandler}
            />
          </FormContainer>
        ) : status === BookingStatus.SUBMITTED && formData ? (
          <FormContainer>
            <h1 className='head-text heading-2'>Review and Confirm</h1>
            <BookingConfirmation
              className='form-wrapper'
              data={formData}
              onConfirmBooking={formConfirmHandler}
              onEditBooking={formEditHandler}
            />
          </FormContainer>
        ) : status === BookingStatus.COMPLETED ? (
          <FormContainer>
            <h1 className='head-text heading-2'>
              Your reservation has been confirmed!
            </h1>
            <div className='form-wrapper text-content'>
              <p className='heading-2'>We look forward to welcoming you.</p>
              <p className='body-2'>
                Feel free to review your reservation details in the profile
                section.
              </p>
            </div>
          </FormContainer>
        ) : (
          <FormContainer>
            <h1 className='head-text heading-2'>Service Unavailable!</h1>
            <div className='form-wrapper text-content'>
              <p className='body-2'>
                Sorry, we're experiencing technical difficulties. Our
                reservation system is currently unavailable due to a website
                error. Please try again later or contact the restaurant directly
                to book your table. We apologize for the inconvenience!
              </p>
            </div>
          </FormContainer>
        )}
      </div>
    </PageContainer>
  );
};

export default BookingPage;
