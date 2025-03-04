import styled from 'styled-components';

export const Container = styled.section`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.secondary_background};

  .section-inner {
    display: flex;
    justify-content: space-between;
    padding: 2rem;
    margin-bottom: 10rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop + 'px'}) {
    .section-inner {
      margin-bottom: 8rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet + 'px'}) {
    .section-inner {
      margin-bottom: 2rem;
    }
  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  .name {
    font-family: ${({ theme }) => theme.font.family.heading};
    font-size: ${({ theme }) => theme.font.size['7xl']};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    line-height: 0.8;
    color: ${({ theme }) => theme.colors.highlight_tertiary_text};
  }

  .location {
    font-family: ${({ theme }) => theme.font.family.heading};
    font-size: ${({ theme }) => theme.font.size['5xl']};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    line-height: 0.8;
  }

  .description {
    font-size: ${({ theme }) => theme.font.size['lg']};
    font-weight: ${({ theme }) => theme.font.weight.normal};
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
    width: 24rem;
    height: 28rem;
    border-radius: ${({ theme }) => theme.border.radius.large};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.laptop + 'px'}) {
    img {
      width: 20rem;
      height: 24rem;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet + 'px'}) {
    img {
      display: none;
    }
  }
`;
