import '@testing-library/jest-dom';
import { render, RenderOptions } from '@testing-library/react';

import type { ReactElement, ReactNode } from 'react';
import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/global';
import { ChakraUiProvider } from '../components';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ChakraUiProvider>{children}</ChakraUiProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
