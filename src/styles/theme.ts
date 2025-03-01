import { DefaultTheme } from 'styled-components';
const theme: DefaultTheme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',

    primary: '#F4CE14',
    secondary: '#EE9972',
    disabled: '#BDBDBD',
    focused: '#0077B6',

    primary_text: '#000000',
    secondary_text: '#333333',
    tertiary_text: '#FFFFFF',
    highlight_primary_text: '#EE9972',
    highlight_secondary_text: '#495E57',
    highlight_tertiary_text: '#F4CE14',
    disabled_text: '#9E9E9E',
    focused_text: '#0077B6',

    primary_background: '#FFFFFF',
    secondary_background: '#495E57',
    tertiary_background: '#FBDABB',
    card_background: '#EDEFEE',
    dark_background: '#333333',

    primary_outline: '#EDEFEE',
    secondary_outline: '#495E57',
    disabled_outline: '#BDBDBD',
    focused_outline: '#0077B6',

    primary_component: '#F4CE14',
    secondary_component: '#EE9972',
    disabled_component: '#BDBDBD',
    focused_component: '#0077B6',
  },
  border: {
    radius: {
      small: '0.25rem',
      medium: '0.5rem',
      large: '1rem',
    },
  },
  font: {
    family: {
      primary: "'Karla', sans-serif",
      heading: "'Markazi Text', serif",
    },
    weight: {
      normal: 400,
      medium: 500,
      bold: 700,
      extrabold: 800,
    },
    size: {
      '2xs': '0.625rem',
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
      '8xl': '6rem',
      '9xl': '8rem',
    },
  },
  maxwidth: 1440,
  breakpoints: {
    mobile: 576, // Small devices like phones
    tablet: 768, // Medium devices like tablets
    laptop: 1024, // Larger devices like laptops
    desktop: 1280, // Desktops and large screens
    largeDesktop: 1440, // Large desktop screens
  },
};

export default theme;
