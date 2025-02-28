import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.maxwidth + 'px'};
  min-height: 80vh;
  margin: 0 auto;
  padding: 8.5rem 2rem 2rem 2rem;
`;
