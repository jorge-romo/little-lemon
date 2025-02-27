import styled from 'styled-components';

export const Button = styled.button`
  appearance: none;
  border: none;
  background-color: ${({ theme }) => theme.colors.primary_component};
  color: ${({ theme }) => theme.colors.primary_text};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: box-shadow 0.1s ease-in-out;
  text-align: center;
  padding: 0.5rem 1rem;

  &:hover {
    box-shadow: inset 0px 0px 9999px 99999px rgba(0, 0, 0, 0.1);
  }

  &:active {
    border-style: none;
    box-shadow: inset 0px 0px 5px 5px rgba(0, 0, 0, 0.25);
  }

  &.icon-button {
    width: 3rem;
    height: 3rem;
    padding: 0.5rem;
    background-color: transparent;

    img {
      display: inline-block;
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;
