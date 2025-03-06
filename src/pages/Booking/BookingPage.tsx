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
            <h2>Reserve a table</h2>
            <BookingForm
              className='form-wrapper'
              data={formData}
              getOccasions={getOccasions}
              getTimeSlots={getTimeSlots}
              onSubmitForm={formSubmitHandler}
            />
          </FormContainer>
        ) : status === BookingStatus.SUBMITTED && formData ? (
          <FormContainer>
            <h2>Review and Confirm</h2>
            <BookingConfirmation
              className='form-wrapper'
              data={formData}
              onConfirmBooking={formConfirmHandler}
              onEditBooking={formEditHandler}
            />
          </FormContainer>
        ) : status === BookingStatus.COMPLETED ? (
          <FormContainer>
            <div>Your reservation has been confirmed!</div>
            <div>We look forward to welcoming you.</div>
            <div>
              Feel free to review your reservation details in the profile
              section.
            </div>
          </FormContainer>
        ) : (
          <FormContainer>
            <div>Service unavailable!</div>
          </FormContainer>
        )}
      </div>
    </PageContainer>
  );
};

export default BookingPage;
