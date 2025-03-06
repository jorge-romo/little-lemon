import type { FC, MouseEventHandler } from 'react';
import { Link } from 'react-router';
import clsx from 'clsx';
import { Container } from './styles';
import { NavProps } from './types';

const Nav: FC<NavProps> = ({
  type,
  className,
  onClickLink,
  ...rest
}: NavProps) => {
  const generateHandleLinkClick = (
    to: string
  ): MouseEventHandler<HTMLAnchorElement> => {
    return (e) => {
      if (onClickLink) onClickLink(e, to);
    };
  };

  return (
    <Container className={clsx(className, type)} {...rest}>
      <Link
        to='/'
        className='button-text'
        onClick={onClickLink ? generateHandleLinkClick('/') : undefined}
      >
        Home
      </Link>
      <Link
        to='/#about'
        className='button-text'
        onClick={onClickLink ? generateHandleLinkClick('/#about') : undefined}
      >
        About
      </Link>
      <Link
        to='/#menu'
        className='button-text'
        onClick={onClickLink ? generateHandleLinkClick('/#menu') : undefined}
      >
        Menu
      </Link>
      <Link
        to='/bookings'
        className='button-text'
        onClick={onClickLink ? generateHandleLinkClick('/bookings') : undefined}
      >
        Reservations
      </Link>
      <Link
        to='/order'
        className='button-text'
        onClick={onClickLink ? generateHandleLinkClick('/order') : undefined}
      >
        Order Online
      </Link>
      <Link
        to='/login'
        className='button-text'
        onClick={onClickLink ? generateHandleLinkClick('/login') : undefined}
      >
        Log In
      </Link>
    </Container>
  );
};

export default Nav;
