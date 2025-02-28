import { FC, HTMLAttributes } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router';
import { Container, Content, ImageContainer } from './styles';
import restaurantFood from '../../assets/restaurant-food.jpg';

const HeroSection: FC<HTMLAttributes<HTMLDivElement>> = (props) => {
  return (
    <Container {...props}>
      <Content>
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className='lead-txt'>
          We are family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <Button as={Link} to='/bookings'>
          Reserve a Table
        </Button>
      </Content>
      <ImageContainer>
        <img src={restaurantFood} alt='Restaurant Food' />
      </ImageContainer>
    </Container>
  );
};

export default HeroSection;
