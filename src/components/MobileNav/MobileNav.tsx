import { FC, HTMLAttributes, useState } from 'react';
import Nav from '../Nav';
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
import LogoIcon from '../../assets/logo.svg?react';
import MenuIcon from '../../assets/hamburger-menu-icon.svg?react';
import CloseIcon from '../../assets/close-icon.svg?react';

const MobileNav: FC<HTMLAttributes<HTMLElement>> = (props) => {
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
        <DrawerContent background='white' paddingX={8} paddingY={4}>
          <DrawerHeader display='flex' justifyContent='flex-end'>
            <DrawerCloseTrigger>
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
              <LogoIcon />
            </LogoContainer>
            <Nav type='mobile' onClickLink={() => setOpen(false)} />
          </DrawerBody>
        </DrawerContent>
      </DrawerRoot>
    </div>
  );
};

export default MobileNav;
