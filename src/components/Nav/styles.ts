import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1rem;

  a {
    font-size: ${({ theme }) => theme.font.size.xl};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 1.5;
    padding: 0 0.5rem;
  }

  &.mobile {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 2rem;
    padding: 1rem;
  }
`;
