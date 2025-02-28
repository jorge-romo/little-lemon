import type { PropsWithChildren } from 'react';
import { Link, NavLink } from 'react-router';
import type { WebTarget } from 'styled-components';
import clsx from 'clsx';
import {
  ButtonContainer,
  LinkButtonContainer,
  NavLinkButtonContainer,
} from './styles';
import type { IconButtonProps } from './types';

function IconButton<
  AsTarget extends WebTarget | typeof Link | typeof NavLink = 'button',
>(props: PropsWithChildren<IconButtonProps<AsTarget>>) {
  const { as, variant, size, color, rounded, className, children, ...rest } =
    props;

  const renderContent = () => {
    return <span className='icon'>{children}</span>;
  };

  if (as === NavLink) {
    return (
      <NavLinkButtonContainer
        as={as}
        variant={variant}
        size={size}
        color={color}
        rounded={rounded}
        className={clsx(className, 'icon-button')}
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
        className={clsx(className, 'icon-button')}
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
      className={clsx(className, 'icon-button')}
      {...rest}
    >
      {renderContent()}
    </ButtonContainer>
  );
}

export default IconButton;
