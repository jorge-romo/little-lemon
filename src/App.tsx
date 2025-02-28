import { BrowserRouter } from 'react-router';
import { ThemeProvider } from 'styled-components';
import GlobalStyles from './styles/global';
import theme from './styles/theme';
import { ChakraUiProvider } from './components';
import Routes from './routes';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <ChakraUiProvider>
          <Routes />
        </ChakraUiProvider>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
