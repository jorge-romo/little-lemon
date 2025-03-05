import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { WebTarget, ResponsiveDesign } from 'styled-components';
import type { KnownTarget } from 'styled-components/dist/types';

export type ExtendedButtonStyledProps<AsTarget extends WebTarget> = Omit<
  ButtonStyledProps<AsTarget>,
  'rounded' | 'size'
> & {
  size?:
    | ButtonStyledProps<AsTarget>['rounded']
    | ResponsiveDesign<ButtonStyledProps<AsTarget>['rounded']>; // default 'md'
  rounded?:
    | ButtonStyledProps<AsTarget>['rounded']
    | ResponsiveDesign<ButtonStyledProps<AsTarget>['rounded']>; // default 'md'
};

export type ButtonStyledProps<AsTarget extends WebTarget> = {
  as?: AsTarget; // default button
  variant?: 'primary' | 'secondary' | 'outlined'; // default 'primary'
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'default'
    | 'light_grey'
    | 'dark_grey'; // default 'default'
  size?: 'sm' | 'md' | 'lg'; // default 'md'
  rounded?: boolean | 'sm' | 'md' | 'lg' | 'rounded' | 'circle'; // default 'md'
};

export type ButtonIconProps = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

type BaseProps<
  ExtendedProps extends Record<string, any>,
  AsTarget extends WebTarget,
  AsTargetProps extends object = AsTarget extends KnownTarget
    ? ComponentPropsWithRef<AsTarget>
    : {},
> = ExtendedProps & AsTargetProps;

export type ButtonBaseProps<AsTarget extends WebTarget> = BaseProps<
  ButtonStyledProps<AsTarget>,
  AsTarget
>;

export type ButtonProps<AsTarget extends WebTarget> = BaseProps<
  ExtendedButtonStyledProps<AsTarget>,
  AsTarget
> &
  ButtonIconProps;

export type IconButtonProps<AsTarget extends WebTarget> = BaseProps<
  ExtendedButtonStyledProps<AsTarget>,
  AsTarget
>;
