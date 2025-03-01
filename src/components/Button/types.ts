import type { ComponentPropsWithRef, ReactNode } from 'react';
import type { WebTarget } from 'styled-components';
import type { KnownTarget } from 'styled-components/dist/types';

export type ExtendedButtonProps<AsTarget extends WebTarget> = {
  as?: AsTarget; // default button
  variant?: 'primary' | 'secondary' | 'outlined'; // default 'primary'
  color?: 'primary' | 'secondary' | 'default'; // default 'default'
  size?: 'md' | 'lg'; // default 'md'
  rounded?: boolean | 'sm' | 'md' | 'lg' | 'circle'; // default 'md'
};

export type ButtonIconProps = {
  startIcon?: ReactNode;
  endIcon?: ReactNode;
};

export type ButtonBaseProps<
  AsTarget extends WebTarget,
  AsTargetProps extends object = AsTarget extends KnownTarget
    ? ComponentPropsWithRef<AsTarget>
    : {},
> = ExtendedButtonProps<AsTarget> & AsTargetProps;

export type ButtonProps<AsTarget extends WebTarget> =
  ButtonBaseProps<AsTarget> & ButtonIconProps;

export type IconButtonProps<AsTarget extends WebTarget> =
  ButtonBaseProps<AsTarget>;
