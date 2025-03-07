import { useState, useRef, useEffect, FC, ComponentPropsWithRef } from 'react';
import { Link } from 'react-router';
import { Nav } from '../Nav';
import { IconButton } from '../Button';
import { MobileNav } from '../MobileNav';
import { Container, Content, LogoImg } from './styles';
import logoImg from '../../assets/logo.png';
import BasketIcon from '../../assets/basket-icon.svg?react';

const Header: FC<ComponentPropsWithRef<'div'>> = (props) => {
  const headerRef = useRef<HTMLElement>(null);
  const [_, setLastScrollPosition] = useState(
    window.pageYOffset || document.documentElement.scrollTop
  );

  const handleScroll = () => {
    const header = headerRef.current;
    const scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;

    setLastScrollPosition((prevState) => {
      if (!header) return scrollPosition > 0 ? scrollPosition : 0;

      if (scrollPosition > prevState) {
        header.style.transform = 'translateY(-100rem)';
      } else {
        header.style.transform = 'translateY(0)';
      }
      return scrollPosition > 0 ? scrollPosition : 0;
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Container {...props} ref={headerRef}>
      <Content>
        <div className='desktop-only'>
          <Link to='/'>
            <LogoImg src={logoImg} alt='Little Lemon' />
          </Link>
        </div>
        <Nav className='desktop-only' />
        <MobileNav className='touchscreen-only' />
        <Link to='/' className='touchscreen-only'>
          <LogoImg src={logoImg} alt='Little Lemon' />
        </Link>
        <IconButton
          className='touchscreen-only'
          variant='secondary'
          size='lg'
          aria-label='Open menu'
        >
          <BasketIcon />
        </IconButton>
      </Content>
    </Container>
  );
};

export default Header;
