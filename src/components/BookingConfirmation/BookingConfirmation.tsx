import { FC } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';
import { Button } from '../Button';
import { BookingConfirmationProps } from './types';

const BookingConfirmation: FC<BookingConfirmationProps> = ({
  data,
  onConfirmBooking,
  onEditBooking,
  ...rest
}) => {
  return (
    <div {...rest}>
      <div style={{ whiteSpace: 'pre-line' }}>
        {JSON.stringify(data, null, 2)}
      </div>
      <Button startIcon={<FaEdit />} onClick={onEditBooking}>
        Edit
      </Button>
      <Button
        color='tertiary'
        startIcon={<FaCheck />}
        onClick={onConfirmBooking}
      >
        Confirm
      </Button>
    </div>
  );
};

export default BookingConfirmation;
