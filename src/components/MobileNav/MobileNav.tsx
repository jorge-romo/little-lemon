import { useState, FC, HTMLAttributes } from 'react';
import Nav from '../Nav';
import { IconButton } from '../Button';
import { Menu } from './styles';
import LogoIcon from '../../assets/logo.svg?react';
import MenuIcon from '../../assets/hamburger-menu-icon.svg?react';
import CloseIcon from '../../assets/close-icon.svg?react';

const MobileNav: FC<HTMLAttributes<HTMLElement>> = (props) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    setMenuOpen((prevValue) => !prevValue);
  };

  return (
    <div {...props}>
      <IconButton
        variant='secondary'
        size='lg'
        aria-label='Open menu'
        onClick={handleMenu}
      >
        <MenuIcon />
      </IconButton>

      <Menu className={menuOpen ? 'opened' : ''}>
        <IconButton
          className='close-button'
          variant='secondary'
          size='lg'
          aria-label='Close menu'
          onClick={handleMenu}
        >
          <CloseIcon />
        </IconButton>
        <LogoIcon />
        <Nav className='mobile' />
      </Menu>
    </div>
  );
};

export default MobileNav;
