import type { HTMLAttributes } from 'react';
import styled from 'styled-components';
import { defineStyle } from '@chakra-ui/react';

export const Form = styled.form<HTMLAttributes<HTMLDivElement>>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-around;
  gap: 1rem;

  > button {
    flex: 1;
  }
`;

export const inputStyle = defineStyle({
  '--focus-ring-color': 'colors.outline.bg',
  '--chakra-colors-border': 'colors.outline.primary',
});
