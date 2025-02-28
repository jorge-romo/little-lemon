import styled from 'styled-components';

export const Container = styled.div`
  width: 18rem;
  background-color: ${({ theme }) => theme.colors.card_background};
  color: ${({ theme }) => theme.colors.black};
  border-radius: ${({ theme }) => theme.border.radius.large};
`;

export const Image = styled.img`
  width: 100%;
  height: 12rem;
  object-fit: cover;
  border-radius: ${({ theme }) => theme.border.radius.large}
    ${({ theme }) => theme.border.radius.large} 0 0;
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

  .title {
    display: inline-block;
    font-family: ${({ theme }) => theme.font.family.heading};
    font-size: ${({ theme }) => theme.font.size['2xl']};
    color: ${({ theme }) => theme.colors.primary_text};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 1.5;
  }

  .price {
    display: inline-block;
    font-family: ${({ theme }) => theme.font.family.primary};
    font-size: ${({ theme }) => theme.font.size.md};
    color: ${({ theme }) => theme.colors.highlight_primary_text};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 1.5;
  }
`;

export const Body = styled.div`
  height: 8rem;
  color: ${({ theme }) => theme.colors.secondary_text};
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 1.25rem;
`;
