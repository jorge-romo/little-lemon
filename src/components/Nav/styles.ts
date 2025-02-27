import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 2rem;

  a {
    font-size: ${({ theme }) => theme.font.size.xl};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 3.5;
  }

  &.mobile {
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 1rem;
    padding: 1rem;

    a {
      line-height: 1.5;
    }
  }
`;
