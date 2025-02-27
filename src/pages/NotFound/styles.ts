import styled from 'styled-components';

export const Heading = styled.h1`
  margin-right: 1rem;
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.5em;
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const Text = styled.h2`
  margin-right: 1rem;
  font-size: 2rem;
  font-weight: 700;
  line-height: 1.5em;
  color: ${({ theme }) => theme.colors.primary_text};
`;

export const TextContainer = styled.div`
  display: inline-block;
  border-left: 2px solid ${({ theme }) => theme.colors.primary_outline};
  padding-left: 1rem;
`;

export const Container = styled.div`
  min-height: 100vh;
  min-width: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  transition-property: color, background-color;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
`;
