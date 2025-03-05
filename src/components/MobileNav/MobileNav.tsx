import { FC, ComponentPropsWithRef, useState } from 'react';
import { Nav } from '../Nav';
import { IconButton } from '../Button';
import {
  ChakraDrawerBackdrop,
  ChakraDrawerBody,
  ChakraDrawerCloseTrigger,
  ChakraDrawerContent,
  ChakraDrawerHeader,
  ChakraDrawerRoot,
  ChakraDrawerTrigger,
} from '../ui';
import { LogoContainer } from './styles';
import MenuIcon from '../../assets/hamburger-menu-icon.svg?react';
import CloseIcon from '../../assets/close-icon.svg?react';
import logoImg from '../../assets/logo.png';

const MobileNav: FC<ComponentPropsWithRef<'div'>> = (props) => {
  const [open, setOpen] = useState(false);

  return (
    <div {...props}>
      <ChakraDrawerRoot
        open={open}
        onOpenChange={(e) => setOpen(e.open)}
        size='full'
        placement='start'
      >
        <ChakraDrawerBackdrop />
        <ChakraDrawerTrigger asChild>
          <IconButton variant='secondary' size='lg' aria-label='Open menu'>
            <MenuIcon />
          </IconButton>
        </ChakraDrawerTrigger>
        <ChakraDrawerContent background='white' padding={4}>
          <ChakraDrawerHeader display='flex' justifyContent='flex-start'>
            <ChakraDrawerCloseTrigger asChild>
              <IconButton
                className='close-button'
                variant='secondary'
                size='lg'
                aria-label='Close menu'
              >
                <CloseIcon />
              </IconButton>
            </ChakraDrawerCloseTrigger>
          </ChakraDrawerHeader>
          <ChakraDrawerBody
            paddingY={8}
            display='flex'
            flexDirection='column'
            alignItems='center'
          >
            <LogoContainer>
              <img src={logoImg} alt='Little Lemon' />
            </LogoContainer>
            <Nav type='mobile' onClickLink={() => setOpen(false)} />
          </ChakraDrawerBody>
        </ChakraDrawerContent>
      </ChakraDrawerRoot>
    </div>
  );
};

export default MobileNav;
