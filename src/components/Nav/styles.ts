import styled from 'styled-components';

export const Container = styled.nav`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1rem;

  a {
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
