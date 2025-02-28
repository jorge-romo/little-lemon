import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.white};

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 26rem;
    background-color: ${({ theme }) => theme.colors.secondary_background};
    z-index: -1;
  }
`;

export const Content = styled.div`
  margin-top: 4rem;

  h1 {
    font-family: ${({ theme }) => theme.font.family.heading};
    font-size: ${({ theme }) => theme.font.size['7xl']};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    line-height: 0.8;
    color: ${({ theme }) => theme.colors.primary};
  }

  h2 {
    font-family: ${({ theme }) => theme.font.family.heading};
    font-size: ${({ theme }) => theme.font.size['5xl']};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    line-height: 0.8;
  }

  p {
    font-size: ${({ theme }) => theme.font.size['lg']};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    margin: 1rem 0;
    max-width: 20rem;
  }
`;

export const ImageContainer = styled.div`
  margin-top: 2rem;

  img {
    display: block;
    object-fit: cover;
    width: 24rem;
    height: 28rem;
    border-radius: ${({ theme }) => theme.border.radius.large};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet + 'px'}) {
    display: none;
  }
`;
