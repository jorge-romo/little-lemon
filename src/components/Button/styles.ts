import { Link, NavLink } from 'react-router';
import styled, { css, WebTarget } from 'styled-components';
import type { ButtonBaseProps, ButtonProps, ButtonStyledProps } from './types';

const buttonBaseStyles = css<ButtonStyledProps<WebTarget>>`
  appearance: none;
  border-style: ${({ variant }) => (variant === 'outlined' ? 'solid' : 'none')};
  border-width: ${({ variant }) => (variant === 'outlined' ? '2px' : 'unset')};
  background-color: ${({ theme, variant, color }) =>
    variant === 'outlined' || variant === 'secondary'
      ? 'transparent'
      : color === 'light_grey'
        ? theme.colors.light_grey_component
        : color === 'dark_grey'
          ? theme.colors.dark_grey_component
          : color === 'secondary'
            ? theme.colors.secondary_component
            : color === 'tertiary'
              ? theme.colors.tertiary_component
              : theme.colors.primary_component};
  color: ${({ theme, variant, color }) =>
    variant === 'outlined' || variant === 'secondary'
      ? color === 'light_grey'
        ? theme.colors.light_grey_component
        : color === 'dark_grey'
          ? theme.colors.dark_grey_component
          : color === 'primary'
            ? theme.colors.primary_component
            : color === 'secondary'
              ? theme.colors.secondary_component
              : theme.colors.primary_text
      : color === 'dark_grey' || color === 'secondary' || color === 'tertiary'
        ? theme.colors.tertiary_text
        : theme.colors.primary_text};
  border-radius: ${({ rounded, theme }) =>
    rounded === false
      ? 'none'
      : rounded === 'circle'
        ? '50%'
        : rounded === 'rounded'
          ? '999999px'
          : rounded === 'lg'
            ? theme.border.radius.large
            : rounded === 'sm'
              ? theme.border.radius.small
              : theme.border.radius.medium};
  transition: box-shadow 0.1s ease-in-out;
  text-align: center;
  padding: ${({ size }) => (size === 'lg' ? '1rem 2rem' : '0.5rem 1rem')};
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ size, theme }) =>
    size === 'lg' ? theme.font.size.lg : theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 1.5;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover:not(:disabled) {
    box-shadow: inset 0px 0px 9999px 99999px rgba(0, 0, 0, 0.1);
  }

  &:active:not(:disabled) {
    border-style: none;
    box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  }

  a&:hover:not(:disabled),
  a&:active:not(:disabled) {
    opacity: unset;
  }

  &:disabled {
    background-color: ${({ theme, variant }) =>
      variant === 'secondary'
        ? 'transparent'
        : theme.colors.disabled_component};
    color: ${({ theme }) => theme.colors.disabled_text};
    cursor: not-allowed;
  }

  &.icon-button {
    width: 2.5em;
    height: 2.5em;
    padding: 0.5em;
  }

  .icon {
    display: inline-block;
    width: 1em;
    height: 1em;
    font-size: 1.5em;
    line-height: 1;

    > * {
      display: inline-block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .icon.start {
    margin-right: 0.5em;
  }

  .icon.end {
    margin-left: 0.5em;
  }
`;

const shouldForwardProp = (prop: string) =>
  ![
    'as',
    'variant',
    'color',
    'size',
    'rounded',
    'startIcon',
    'endIcon',
  ].includes(prop);

export const ButtonContainer = styled<WebTarget, ButtonProps<WebTarget>>(
  'button'
).withConfig({
  shouldForwardProp,
})`
  ${buttonBaseStyles}
`;

export const NavLinkButtonContainer = styled<
  typeof Link,
  ButtonBaseProps<typeof NavLink>
>(NavLink).withConfig({
  shouldForwardProp,
})`
  ${buttonBaseStyles}
`;

export const LinkButtonContainer = styled<
  typeof Link,
  ButtonBaseProps<typeof Link>
>(Link).withConfig({
  shouldForwardProp,
})`
  ${buttonBaseStyles}
`;
