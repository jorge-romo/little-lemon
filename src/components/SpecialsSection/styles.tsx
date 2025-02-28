import styled from 'styled-components';

export const Container = styled.section`
  padding: 1rem 0;
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 4rem;

  h2 {
    text-align: center;
    line-height: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet + 'px'}) {
    flex-direction: column;
  }
`;

export const ItemsContainer = styled.div`
  /* padding: 1rem 0; */
`;

export const Item = styled.div`
  position: relative;
`;

export const Items = styled.div`
  position: relative;
  width: 100%;
  display: grid;

  @media (min-width: ${({ theme }) => theme.breakpoints.laptop + 1 + 'px'}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 4rem;

    & > ${Item}:nth-child(3n + 1) {
      margin-right: auto;
    }

    & > ${Item}:nth-child(3n + 2) {
      margin-left: auto;
      margin-right: auto;
    }

    & > ${Item}:nth-child(3n) {
      margin-left: auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop + 'px'}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;

    & > ${Item}:nth-child(2n + 1) {
      margin-right: auto;
    }

    & > ${Item}:nth-child(2n) {
      margin-left: auto;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet + 'px'}) {
    grid-template-columns: 1fr;
    grid-gap: 4rem;

    & > ${Item}:nth-child(n) {
      margin-left: auto;
      margin-right: auto;
    }
  }
`;
