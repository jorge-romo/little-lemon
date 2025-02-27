import { BrowserRouter } from 'react-router';
import { Global, ThemeProvider } from '@emotion/react';
import styles from './styles/global';
import theme from './styles/theme';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter basename='/little-lemon'>
      <ThemeProvider theme={theme}>
        <Global styles={styles} />
        <Routes />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
