import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.primary_background};
  color: ${({ theme }) => theme.colors.black};
  -webkit-font-smoothing: antialiased;
};

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
};

input, button, textarea {
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size.md};
  outline: none;
};

h1 {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size['8xl']};
  font-weight: ${({ theme }) => theme.font.weight.medium};
};

h2 {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size['7xl']};
  font-weight: ${({ theme }) => theme.font.weight.normal};
};

h3 {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size['6xl']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
};

h4 {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size['5xl']};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
};

h5 {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size['4xl']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
};

h6 {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size['2xl']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
};

.lead-txt {
  font-weight: ${({ theme }) => theme.font.weight.medium};
};

.highlight {
  font-weight: ${({ theme }) => theme.font.weight.medium};
};

.card-title {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size.md};
  font-weight: ${({ theme }) => theme.font.weight.bold};
};

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: filter 0.2s;
}

a:hover {
  filter: brightness(.9);
}
`;
