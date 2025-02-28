import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  min-height: 80vh;

  > section,
  > div {
    padding: 2rem;
    width: 100%;
    max-width: ${({ theme }) => theme.maxwidth + 'px'};
    margin: 0 auto;
    margin-top: 8.5rem;
  }
`;
