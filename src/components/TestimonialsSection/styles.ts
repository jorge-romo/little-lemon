import styled from 'styled-components';

export const Container = styled.section`
  position: relative;
  background-color: ${({ theme }) => theme.colors.tertiary_background};
  padding: 2rem 2rem 4rem;
`;

export const Title = styled.h2`
  text-align: center;
  margin-top: 2rem;
  margin-bottom: 4rem;
  line-height: 1;
`;

export const Item = styled.div`
  position: relative;
`;

export const Items = styled.div`
  position: relative;
  display: grid;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop + 1 + 'px'}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop + 'px'}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet + 'px'}) {
    grid-template-columns: 1fr;
    grid-gap: 4rem;
  }
`;
