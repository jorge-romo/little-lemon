import type {
  ComponentPropsWithRef,
  MouseEvent as ReactMouseEvent,
} from 'react';

export type NavProps = {
  type?: 'mobile' | 'desktop';
  onClickLink?: (
    e: ReactMouseEvent<HTMLAnchorElement, MouseEvent>,
    to: string
  ) => void;
} & ComponentPropsWithRef<'div'>;
