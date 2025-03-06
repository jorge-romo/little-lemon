import '@testing-library/jest-dom';
import type { ReactElement, ReactNode } from 'react';
import { BrowserRouter } from 'react-router';
import { render, RenderOptions } from '@testing-library/react';

import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';
import GlobalStyles from '../styles/global';

const AllTheProviders = ({ children }: { children: ReactNode }) => {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        {children}
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
