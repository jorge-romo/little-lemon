import { FC, ComponentPropsWithRef, useState } from 'react';
import { Nav } from '../Nav';
import { IconButton } from '../Button';
import {
  DrawerBackdrop,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerRoot,
  DrawerTrigger,
} from '../ui/drawer';
import { LogoContainer } from './styles';
import MenuIcon from '../../assets/hamburger-menu-icon.svg?react';
import CloseIcon from '../../assets/close-icon.svg?react';
import logoImg from '../../assets/logo.png';

const MobileNav: FC<ComponentPropsWithRef<'div'>> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div {...props}>
      <DrawerRoot
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        size='full'
        placement='start'
      >
        <DrawerBackdrop />
        <DrawerTrigger asChild>
          <IconButton variant='secondary' size='lg' aria-label='Open menu'>
            <MenuIcon />
          </IconButton>
        </DrawerTrigger>
        <DrawerContent background='white' padding={4}>
          <DrawerHeader display='flex' justifyContent='flex-start'>
            <DrawerCloseTrigger asChild>
              <IconButton
                className='close-button'
                variant='secondary'
                size='lg'
                aria-label='Close menu'
              >
                <CloseIcon />
              </IconButton>
            </DrawerCloseTrigger>
          </DrawerHeader>
          <DrawerBody
            paddingY={8}
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <LogoContainer>
              <img src={logoImg} alt='Little Lemon' />
            </LogoContainer>
            <Nav type='mobile' onClickLink={() => setOpen(false)} />
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </div>
  );
};

export default MobileNav;
