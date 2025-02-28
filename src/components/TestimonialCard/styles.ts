import styled from 'styled-components';
import { HTMLAttributes } from 'react';

export const Container = styled.div<HTMLAttributes<HTMLDivElement>>`
  color: ${({ theme }) => theme.colors.primary_text};
  background-color: ${({ theme }) => theme.colors.primary_background};
  border-radius: ${({ theme }) => theme.border.radius.medium};
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const Customer = styled.span`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;

  img {
    width: 5rem;
    height: 5rem;
    border-radius: 50%;
    object-fit: cover;
  }

  span {
    font-weight: ${({ theme }) => theme.font.weight.bold};
  }
`;

export const Blockquote = styled.blockquote`
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 1.5;

  & > p::before {
    content: open-quote;
  }

  & > p::after {
    content: close-quote;
  }
`;
