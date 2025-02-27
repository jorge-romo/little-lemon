import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.tertiary_background};
  color: ${({ theme }) => theme.colors.tertiary_text};
`;

export const Copyright = styled.div`
  text-align: center;
  padding: 2rem 0;

  p {
    line-height: 1.5;
  }
`;

export const Content = styled.div`
  max-width: ${({ theme }) => theme.maxwidth + 'px'};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile + 'px'}) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  width: 16rem;
  height: 28rem;
  object-fit: cover;
  margin-top: 4.5rem;
  border-radius: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile + 'px'}) {
    display: none;
  }
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4.5rem;
  padding-top: 3rem;

  h5 {
    height: 4.5rem;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    li {
      list-style: none;
    }
  }
`;
