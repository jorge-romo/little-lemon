import { DefaultTheme } from 'styled-components';
const theme: DefaultTheme = {
  colors: {
    black: '#000000',
    white: '#ffffff',

    primary: '#495E57',
    secondary: '#F4CE14',
    disabled: '#BDBDBD',
    focused: '#0077B6',

    primary_text: '#212121',
    secondary_text: '#757575',
    disabled_text: '#9E9E9E',
    focused_text: '#0077B6',

    primary_background: '#F5F5F5',
    secondary_background: '#E0E0E0',

    primary_highlight: '#FBDABB',
    secondary_highlight: '#EE9972',

    primary_outline: '#495E57',
    secondary_outline: '#F4CE14',
    disabled_outline: '#BDBDBD',
    focused_outline: '#0077B6',

    primary_component: '#EDEDEE',
    secondary_component: '#333333',
    disabled_component: '#BDBDBD',
    focused_component: '#0077B6',
  },
  border: {
    radius: {
      small: '0.8rem',
      medium: '1.6rem',
      large: '2.4rem',
    },
  },
  font: {
    family: {
      primary: "'Markazi Text', serif",
      secondary: "'Karla', sans-serif",
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
      extrabold: 800,
    },
    size: {
      small: '1.6rem',
      medium: '1.8rem',
      large: '2.0rem',
      xlarge: '4.0rem',
      xxlarge: '5.2rem',
      huge: '6.4rem',
    },
  },
};

export default theme;
