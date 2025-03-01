import { FC, ComponentPropsWithRef } from 'react';
import { Button } from '../Button';
import { Link } from 'react-router';
import { Container, Content, ImageContainer } from './styles';
import restaurantFood from '../../assets/restaurant-food.jpg';

const HeroSection: FC<ComponentPropsWithRef<'div'>> = (props) => {
  return (
    <Container {...props}>
      <div className='section-inner'>
        <Content>
          <h1 className='name'>Little Lemon</h1>
          <p className='location'>Chicago</p>
          <p className='description'>
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
      </div>
    </Container>
  );
};

export default HeroSection;
