import styled from 'styled-components';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.primary_background};

  .section-inner {
    padding: 2rem 2rem 4rem;
  }
`;

export const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;

  .head-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    overflow: hidden;
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-bottom: 1rem;

    h2 {
      font-family: ${({ theme }) => theme.font.family.heading};
      font-size: ${({ theme }) => theme.font.size['xl']};
      font-weight: ${({ theme }) => theme.font.weight.bold};
      text-transform: uppercase;
      line-height: 1.5;
    }
  }
`;

export const TagGroup = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  padding-bottom: 1rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    border-bottom: 1px solid ${({ theme }) => theme.colors.primary_outline};
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
  display: grid;

  & > ${Item} {
    margin-left: auto;
    margin-right: auto;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.md + 1 + 'px'}) {
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    grid-template-columns: 1fr;
    grid-gap: 1rem;
  }
`;
