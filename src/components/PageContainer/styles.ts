import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.maxwidth + 'px'};
  min-height: 80vh;
  margin: 0 auto;
  padding-top: 6.5rem;
`;
