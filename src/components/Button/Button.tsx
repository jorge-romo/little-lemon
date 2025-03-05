import type { PropsWithChildren, ReactNode } from 'react';
import { Link, NavLink } from 'react-router';
import { ResponsiveDesign, useTheme, WebTarget } from 'styled-components';
import type { Primitive } from 'zod';
import { useMediaQuery } from '@chakra-ui/react';
import { returnNotEmpty } from '../../utils/type';
import {
  ButtonContainer,
  LinkButtonContainer,
  NavLinkButtonContainer,
} from './styles';
import {
  ButtonIconProps,
  ButtonProps,
  ExtendedButtonStyledProps,
} from './types';

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
  } = props as PropsWithChildren<ExtendedButtonStyledProps<AsTarget>> &
    ButtonIconProps;
  const theme = useTheme();
  const [xl, lg, md, sm] = useMediaQuery(
    [
      `(min-width: ${theme.breakpoints.lg + 1}px)`,
      `(min-width: ${theme.breakpoints.md + 1}px)`,
      `(min-width: ${theme.breakpoints.sm + 1}px)`,
      `(min-width: ${theme.breakpoints.xs + 1}px)`,
    ],
    {
      fallback: [],
    }
  );

  const renderContent = (): ReactNode => {
    return (
      <>
        {!!startIcon && <span className='icon start'>{startIcon}</span>}
        <span className='content'>{children}</span>
        {!!endIcon && <span className='icon end'>{endIcon}</span>}
      </>
    );
  };

  function applyResponsive<T extends Primitive>(res: ResponsiveDesign<T> | T) {
    if (typeof res !== 'object' || res === null) return res;

    if (xl) return returnNotEmpty(res.xl, res.lg, res.md, res.sm, res.xs);
    if (lg) return returnNotEmpty(res.lg, res.md, res.sm, res.xs);
    if (md) return returnNotEmpty(res.md, res.sm, res.xs);
    if (sm) return returnNotEmpty(res.sm, res.xs);

    return returnNotEmpty(res.xs);
  }

  if (as === NavLink) {
    return (
      <NavLinkButtonContainer
        {...(rest as any)}
        as={as}
        variant={variant}
        color={color}
        size={applyResponsive(size)}
        rounded={applyResponsive(rounded)}
      >
        {renderContent()}
      </NavLinkButtonContainer>
    );
  }

  if (as === Link) {
    return (
      <LinkButtonContainer
        {...(rest as any)}
        as={as}
        variant={variant}
        color={color}
        size={applyResponsive(size)}
        rounded={applyResponsive(rounded)}
      >
        {renderContent()}
      </LinkButtonContainer>
    );
  }

  return (
    <ButtonContainer
      {...rest}
      as={as}
      variant={variant}
      color={color}
      size={applyResponsive(size)}
      rounded={applyResponsive(rounded)}
    >
      {renderContent()}
    </ButtonContainer>
  );
}

export default Button;
