import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Footer = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: space-around;
  gap: 1rem;

  > button {
    flex: 1;
  }
`;
