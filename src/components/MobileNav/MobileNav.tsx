import { useState, FC, HTMLAttributes } from 'react';
import { Logo, Menu } from './styles';
import logoImg from '../../assets/logo.svg';
import menuImg from '../../assets/hamburger-menu-icon.svg';
import closeImg from '../../assets/close-icon.svg';
import Nav from '../Nav';
import Button from '../Button';

const MobileNav: FC<HTMLAttributes<HTMLElement>> = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prevValue) => !prevValue);
  };

  return (
    <div {...props}>
      <Button
        className='icon-button'
        aria-label='Open menu'
        onClick={handleMenu}
      >
        <img src={menuImg} alt='Open menu' />
      </Button>

      <Menu className={menuOpen ? 'opened' : ''}>
        <Button
          className='icon-button close-button'
          aria-label='Close menu'
          onClick={handleMenu}
        >
          <img src={closeImg} alt='Close menu' />
        </Button>
        <Logo src={logoImg} alt='Little Lemon Logo' />
        <Nav className='mobile' />
      </Menu>
    </div>
  );
};

export default MobileNav;
