import styled from 'styled-components';

export const Container = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: transparent;
  z-index: 1;
  transition: transform 0.5s ease-in-out;
  background-color: ${({ theme }) => theme.colors.primary_background};
`;

export const Content = styled.div`
  position: relative;
  width: 100%;
  max-width: ${({ theme }) => theme.maxwidth + 'px'};
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet + 'px'}) {
    padding: 1rem;
  }
`;

export const LogoImg = styled.img`
  height: 40px;
  width: auto;
  object-fit: contain;
`;
