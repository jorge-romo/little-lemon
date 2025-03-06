import styled from 'styled-components';

export const Container = styled.section`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary_background};

  .section-inner {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    margin-bottom: 6rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
      margin-bottom: 4rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
      margin-bottom: 0rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.xs + 'px'}) {
      padding: 1rem;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .name {
    color: ${({ theme }) => theme.colors.highlight_tertiary_text};
  }

  .location {
  }

  .description {
    margin: 1rem 0;
    max-width: 20rem;
  }
`;

export const ImageContainer = styled.div`
  position: absolute;
  top: 2rem;
  right: 2rem;

  img {
    display: block;
    object-fit: cover;
    width: 21rem;
    height: 24rem;
    border-radius: ${({ theme }) => theme.border.radius.large};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
    img {
      width: 18rem;
      height: 20.5rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    img {
      display: none;
    }
  }
`;
