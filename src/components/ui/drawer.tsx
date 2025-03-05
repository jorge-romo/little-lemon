import type { FC, Ref, RefObject } from 'react';
import { Drawer, Portal } from '@chakra-ui/react';

export interface ChakraDrawerContentProps extends Drawer.ContentProps {
  portalled?: boolean;
  portalRef?: RefObject<HTMLElement>;
  offset?: Drawer.ContentProps['padding'];
  ref?: Ref<HTMLDivElement>;
}

export const ChakraDrawerContent: FC<ChakraDrawerContentProps> = ({
  children,
  portalled = true,
  portalRef,
  offset,
  ref,
  ...rest
}) => {
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <Drawer.Positioner padding={offset}>
        <Drawer.Content ref={ref} {...rest} asChild={false}>
          {children}
        </Drawer.Content>
      </Drawer.Positioner>
    </Portal>
  );
};

export const ChakraDrawerCloseTrigger = Drawer.CloseTrigger;
export const ChakraDrawerTrigger = Drawer.Trigger;
export const ChakraDrawerRoot = Drawer.Root;
export const ChakraDrawerFooter = Drawer.Footer;
export const ChakraDrawerHeader = Drawer.Header;
export const ChakraDrawerBody = Drawer.Body;
export const ChakraDrawerBackdrop = Drawer.Backdrop;
export const ChakraDrawerDescription = Drawer.Description;
export const ChakraDrawerTitle = Drawer.Title;
export const ChakraDrawerActionTrigger = Drawer.ActionTrigger;
