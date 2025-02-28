import styled from 'styled-components';
import { HTMLAttributes } from 'react';

export const Menu = styled.div<HTMLAttributes<HTMLDivElement>>`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  height: 100vh;
  width: 100vw;
  background-color: ${({ theme }) => theme.colors.primary_background};
  z-index: 9999;
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%);
  overflow: hidden;
  padding: 1rem;

  &.opened {
    transform: translateX(0);
  }

  .close-button {
    align-self: flex-end;
    margin: 1rem;
  }
`;
