import type { PropsWithChildren, ReactNode } from 'react';
import { Link, NavLink } from 'react-router';
import { WebTarget } from 'styled-components';
import {
  ButtonContainer,
  LinkButtonContainer,
  NavLinkButtonContainer,
} from './styles';
import { ButtonProps } from './types';

function Button<
  AsTarget extends WebTarget | typeof Link | typeof NavLink = 'button',
>(props: PropsWithChildren<ButtonProps<AsTarget>>) {
  const {
    as,
    variant,
    size,
    color,
    rounded,
    startIcon,
    endIcon,
    children,
    ...rest
  } = props;

  const renderContent = (): ReactNode => {
    return (
      <>
        {!!startIcon && <span className='icon start'>{startIcon}</span>}
        <span className='content'>{children}</span>
        {!!endIcon && <span className='icon end'>{endIcon}</span>}
      </>
    );
  };

  if (as === NavLink) {
    return (
      <NavLinkButtonContainer
        as={as}
        variant={variant}
        size={size}
        color={color}
        rounded={rounded}
        {...rest}
      >
        {renderContent()}
      </NavLinkButtonContainer>
    );
  }

  if (as === Link) {
    return (
      <LinkButtonContainer
        as={as}
        variant={variant}
        size={size}
        color={color}
        rounded={rounded}
        {...rest}
      >
        {renderContent()}
      </LinkButtonContainer>
    );
  }

  return (
    <ButtonContainer
      as={as}
      variant={variant}
      size={size}
      color={color}
      rounded={rounded}
      {...rest}
    >
      {renderContent()}
    </ButtonContainer>
  );
}

export default Button;
