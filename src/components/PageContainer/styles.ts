import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  margin-top: 8.5rem;
  min-height: 80vh;

  .section-inner {
    position: relative;
    width: 100%;
    max-width: ${({ theme }) => theme.maxwidth + 'px'};
    margin-left: auto;
    margin-right: auto;
  }
`;
