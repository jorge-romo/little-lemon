import type {
  ComponentPropsWithRef,
  MouseEvent as ReactMouseEvent,
} from 'react';

export interface NavProps extends ComponentPropsWithRef<'div'> {
  type?: 'mobile' | 'desktop';
  onClickLink?: (
    e: ReactMouseEvent<HTMLAnchorElement, MouseEvent>,
    to: string
  ) => void;
}
