import styled from 'styled-components';

/* prettier-ignore */
export const Container = styled.div`
  position: relative;
  margin-top: 5rem;
  min-height: 80vh;

  .section-inner {
    position: relative;
    width: 100%;
    max-width: ${({ theme }) => theme.maxwidth + 'px'};
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) and (min-width: ${({ theme }) => theme.breakpoints.sm + 1 + 'px'}) {
    margin-top: 7.5rem;
  }
`;
