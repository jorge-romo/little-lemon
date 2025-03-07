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
          <h2 className='location'>Chicago</h2>
          <p className='description body-2'>
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <Button
            as={Link}
            to='/bookings'
            rounded={{ xs: 'rounded', md: 'md' }}
          >
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
