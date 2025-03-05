import styled from 'styled-components';

export const Container = styled.footer`
  background: ${({ theme }) => theme.colors.dark_background};
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
  padding: 3rem 2rem 2rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    flex-direction: column;
  }
`;

export const Image = styled.img`
  display: block;
  width: 16rem;
  height: 28rem;
  object-fit: cover;
  border-radius: 0.5rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    display: none;
  }
`;

export const Column = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  margin-top: 3rem;

  h5 {
    height: 4.5rem;
    white-space: nowrap;
  }

  ul {
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    li {
      list-style: none;
      white-space: nowrap;
    }
  }
`;
