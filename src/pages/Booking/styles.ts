import styled from 'styled-components';
import color from 'color';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.tertiary_text};

  .head-text {
    padding: 2rem;
    text-align: center;
    text-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  .form-wrapper {
    background: ${({ theme }) =>
      color(theme.colors.dark_background).alpha(0.5).hexa()};
    border-radius: ${({ theme }) => theme.border.radius.large};
    padding: 1rem;
    margin: 0 auto 2rem;
    width: calc(100% - 4rem);
    max-width: 27rem;
    min-width: 15rem;
    min-height: 30rem;
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
