import styled from 'styled-components';
import color from 'color';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    font-family: ${({ theme }) => theme.font.family.heading};
    font-size: ${({ theme }) => theme.font.size['4xl']};
    font-weight: ${({ theme }) => theme.font.weight.bold};
    line-height: 1;
    color: ${({ theme }) => theme.colors.tertiary_text};
    padding: 2rem;
    text-align: center;
  }

  .form-wrapper {
    background: ${({ theme }) =>
      color(theme.colors.dark_background).alpha(0.5).hexa()};
    border-radius: ${({ theme }) => theme.border.radius.large};
    padding: 1rem;
    margin: 0 auto 2rem;
    color: ${({ theme }) => theme.colors.tertiary_text};
    width: calc(100% - 4rem);
    max-width: 27rem;
    min-width: 15rem;
    height: 30rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    h2 {
      padding: 1rem;
    }

    .form-content {
      width: calc(100% - 2rem);
      margin-bottom: 1rem;
    }
  }
`;
