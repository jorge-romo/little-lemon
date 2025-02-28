import { useState, useRef, useEffect, FC, HTMLAttributes } from 'react';
import { Link } from 'react-router';
import Nav from '../Nav';
import MobileNav from '../MobileNav';
import { Container, Content } from './styles';
import LogoIcon from '../../assets/logo.svg?react';

const Header: FC<HTMLAttributes<HTMLElement>> = (props) => {
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
        header.style.transform = 'translateY(-200px)';
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
        <Link to='/'>
          <LogoIcon height={50} />
        </Link>
        <div>
          <Nav className='desktop-only' />
          <MobileNav className='touchscreen-only' />
        </div>
      </Content>
    </Container>
  );
};

export default Header;
