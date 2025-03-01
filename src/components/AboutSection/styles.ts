import styled from 'styled-components';
import color from 'color';

export const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.primary_background};

  .section-inner {
    display: flex;
    justify-content: space-between;
    gap: 2rem;
    padding: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.laptop + 'px'}) {
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const Content = styled.div`
  margin: 2rem 2rem 0;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) =>
    color(theme.colors.highlight_secondary_text).lighten(0.5).toString()};
  flex: 1;

  .name {
    font-family: ${({ theme }) => theme.font.family.heading};
    font-size: ${({ theme }) => theme.font.size['7xl']};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    line-height: 1;
    color: ${({ theme }) => theme.colors.highlight_secondary_text};
  }

  .location {
    font-family: ${({ theme }) => theme.font.family.heading};
    font-size: ${({ theme }) => theme.font.size['5xl']};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    line-height: 1;
  }

  .description {
    font-size: ${({ theme }) => theme.font.size['lg']};
    font-weight: ${({ theme }) => theme.font.weight.normal};
    margin: 1rem 0;
  }

  @media (max-width: 966px) {
    align-items: center;
    text-align: center;
  }
`;

export const Image = styled.div`
  position: relative;
  margin-right: 12rem;
  margin-top: 8rem;
  flex: 1;

  img {
    display: block;
    object-fit: cover;
    object-position: center;
    width: 24rem;
    height: 28rem;
  }

  img:last-of-type {
    position: absolute;
    right: -12rem;
    top: -8rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile + 'px'}) {
    margin-right: 8rem;
    margin-top: 6rem;

    img {
      width: 16rem;
      height: 18rem;
    }

    img:last-of-type {
      right: -8rem;
      top: -6rem;
    }
  }
`;
