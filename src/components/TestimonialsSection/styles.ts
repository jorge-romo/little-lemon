import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.tertiary_background};

  .section-inner {
    padding: 2rem 2rem 4rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.xs + 'px'}) {
      padding: 1rem 1rem 4rem;
    }
  }
`;

export const Title = styled.h1`
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

  @media (min-width: ${({ theme }) => theme.breakpoints.lg + 1 + 'px'}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg + 'px'}) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    grid-template-columns: 1fr;
    grid-gap: 2rem;
  }
`;
