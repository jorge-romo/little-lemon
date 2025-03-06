import { FC } from 'react';
import { FaCheck, FaEdit } from 'react-icons/fa';
import { Button } from '../Button';
import { BookingConfirmationProps } from './types';
import { Container, Content, Footer } from './styles';

const BookingConfirmation: FC<BookingConfirmationProps> = ({
  data,
  onConfirmBooking,
  onEditBooking,
  ...rest
}) => {
  return (
    <Container {...rest}>
      <Content style={{ whiteSpace: 'pre-line' }}>
        {JSON.stringify(data, null, 2)}
      </Content>
      <Footer>
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
      </Footer>
    </Container>
  );
};

export default BookingConfirmation;
