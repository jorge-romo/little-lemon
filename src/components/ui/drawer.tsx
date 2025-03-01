import type { FC, Ref, RefObject } from 'react';
import { Drawer as ChakraDrawer, Portal } from '@chakra-ui/react';

interface DrawerContentProps extends ChakraDrawer.ContentProps {
  portalled?: boolean;
  portalRef?: RefObject<HTMLElement>;
  offset?: ChakraDrawer.ContentProps['padding'];
  ref?: Ref<HTMLDivElement>;
}

export const DrawerContent: FC<DrawerContentProps> = ({
  children,
  portalled = true,
  portalRef,
  offset,
  ref,
  ...rest
}) => {
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <ChakraDrawer.Positioner padding={offset}>
        <ChakraDrawer.Content ref={ref} {...rest} asChild={false}>
          {children}
        </ChakraDrawer.Content>
      </ChakraDrawer.Positioner>
    </Portal>
  );
};

export const DrawerCloseTrigger = ChakraDrawer.CloseTrigger;
export const DrawerTrigger = ChakraDrawer.Trigger;
export const DrawerRoot = ChakraDrawer.Root;
export const DrawerFooter = ChakraDrawer.Footer;
export const DrawerHeader = ChakraDrawer.Header;
export const DrawerBody = ChakraDrawer.Body;
export const DrawerBackdrop = ChakraDrawer.Backdrop;
export const DrawerDescription = ChakraDrawer.Description;
export const DrawerTitle = ChakraDrawer.Title;
export const DrawerActionTrigger = ChakraDrawer.ActionTrigger;
