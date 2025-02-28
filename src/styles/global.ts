import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
:root {
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: 16px;
  line-height: 1.5;
  background-color: ${({ theme }) => theme.colors.primary_background};
  color: ${({ theme }) => theme.colors.black};
  -webkit-font-smoothing: antialiased;
};

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
};

h1 {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size['8xl']};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 1.5;
};

h2 {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size['7xl']};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: 1.5;
};

h3 {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size['6xl']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  text-transform: uppercase;
  line-height: 1.5;
};

h4 {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size['5xl']};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  line-height: 1.5;
};

h5 {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size['4xl']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 1.5;
};

h6 {
  font-family: ${({ theme }) => theme.font.family.heading};
  font-size: ${({ theme }) => theme.font.size['2xl']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 1.5;
};

a {
  text-decoration: none;
  color: inherit;
  cursor: pointer;
  transition: opacity 0.2s;
}

a:hover:not(:disabled),
a:active:not(:disabled) {
  opacity: 0.5;
}

a:disabled {
  color: ${({ theme }) => theme.colors.disabled_text};
}
`;
