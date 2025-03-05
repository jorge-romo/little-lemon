import styled from 'styled-components';

export const Container = styled.div`
  width: 20rem;
  background-color: ${({ theme }) => theme.colors.card_background};
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.border.radius.large};
  display: flex;
  flex-direction: column;

  .price {
    display: inline-block;
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.colors.highlight_primary_text};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 1.5;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.lg + 'px'}) {
    width: 16rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md + 'px'}) {
    width: 20rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    flex-direction: row-reverse;
    align-items: center;
    width: auto;
    background-color: ${({ theme }) => theme.colors.primary_background};
    border-radius: 0;
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary_outline};
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.border.radius.large}
    ${({ theme }) => theme.border.radius.large} 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    width: 84px;
    height: 84px;
    object-fit: cover;
    margin-right: 2rem;
    border-radius: ${({ theme }) => theme.border.radius.medium};
  }
`;

export const Content = styled.div`
  padding: 1rem;
`;

export const Header = styled.h6`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    margin-bottom: 0.5rem;
  }

  .title {
    display: inline-block;
    font-family: ${({ theme }) => theme.font.family.heading};
    font-size: ${({ theme }) => theme.font.size['2xl']};
    color: ${({ theme }) => theme.colors.primary_text};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 1.5;
  }
`;

export const Body = styled.div`
  height: 8rem;
  color: ${({ theme }) => theme.colors.secondary_text};

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    height: 3rem;
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-top: 1.25rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    margin-top: 0.5rem;
  }
`;
