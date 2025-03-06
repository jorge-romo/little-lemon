import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
:root {
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: 16px;
  line-height: 1.5;
  background-color: ${({ theme }) => theme.colors.primary_background};
  color: ${({ theme }) => theme.colors.black};
  -webkit-font-smoothing: antialiased;
};


input[type="date"]::-webkit-calendar-picker-indicator {
  display: none;
}

h1, .heading-1 {
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size['5xl']};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 1;
};

h2, .heading-2 {
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size['4xl']};
  font-weight: ${({ theme }) => theme.font.weight.semi_light};
  line-height: 1;
};

h3, .heading-3 {
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size['3xl']};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: 1;
};

h4, .heading-4 {
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size['2xl']};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: 1;
};

h5, .heading-5 {
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size['xl']};
  font-weight: ${({ theme }) => theme.font.weight.normal};
  line-height: 1.25;
};

h6, .heading-6 {
  font-family: ${({ theme }) => theme.font.family.secondary};
  font-size: ${({ theme }) => theme.font.size['lg']};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 1.25;
};

.subtitle {
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size['xl']};
  font-weight: ${({ theme }) => theme.font.weight.extrabold};
  text-transform: uppercase;
  line-height: 1.25;
};

.body-2 {
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size['lg']};
  font-weight: ${({ theme }) => theme.font.weight.medium};
  line-height: 1.5;
};

.button-text {
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size['md']};
  font-weight: ${({ theme }) => theme.font.weight.bold};
  line-height: 1.5;
};

p {
  font-family: ${({ theme }) => theme.font.family.primary};
  font-size: ${({ theme }) => theme.font.size['md']};
  font-weight: ${({ theme }) => theme.font.weight.normal};
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

.desktop-only {
  @media (max-width: ${({ theme }) => theme.breakpoints.sm + 'px'}) {
    display: none !important;
  }
}

.touchscreen-only {
  @media (min-width: ${({ theme }) => theme.breakpoints.sm + 1 + 'px'}) {
    display: none !important;
  }
}
`;

export default globalStyles;
