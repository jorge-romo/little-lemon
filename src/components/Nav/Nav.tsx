import { FC, HTMLAttributes } from 'react';
import { Link } from 'react-router';
import { Container } from './styles';

const Nav: FC<HTMLAttributes<HTMLElement>> = (props) => {
  return (
    <Container {...props}>
      <Link to='/'>Home</Link>
      <Link to='/#about'>About</Link>
      <Link to='/#menu'>Menu</Link>
      <Link to='/bookings'>Reservations</Link>
      <Link to='/order'>Order Online</Link>
      <Link to='/login'>Log In</Link>
    </Container>
  );
};

export default Nav;
