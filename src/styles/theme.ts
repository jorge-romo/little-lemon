import { DefaultTheme } from 'styled-components';
const theme: DefaultTheme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    light_grey: '#EDEFEE',
    dark_grey: '#333333',

    primary: '#F4CE14',
    secondary: '#EE9972',
    disabled: '#BDBDBD',
    focused: '#EDEFEE',

    primary_text: '#000000',
    secondary_text: '#333333',
    tertiary_text: '#FFFFFF',
    highlight_primary_text: '#EE9972',
    highlight_secondary_text: '#495E57',
    highlight_tertiary_text: '#F4CE14',
    disabled_text: '#9E9E9E',
    focused_text: '#EDEFEE',

    primary_background: '#FFFFFF',
    secondary_background: '#495E57',
    tertiary_background: '#FBDABB',
    card_background: '#EDEFEE',
    dark_background: '#333333',

    primary_outline: '#333333',
    secondary_outline: '#EDEFEE',
    disabled_outline: '#BDBDBD',
    focused_outline: '#FFFFFF',

    primary_component: '#F4CE14',
    secondary_component: '#EE9972',
    tertiary_component: '#495E57',
    light_grey_component: '#EDEFEE',
    dark_grey_component: '#333333',
    disabled_component: '#BDBDBD',
    focused_component: '#EDEFEE',
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
      secondary: "'Markazi Text', serif",
    },
    weight: {
      semi_light: 300,
      normal: 400,
      medium: 500,
      bold: 700,
      extrabold: 800,
    },
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      md: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.5rem',
      '5xl': '4rem',
    },
  },
  maxwidth: 1440,
  breakpoints: {
    xs: 480,
    sm: 768,
    md: 992,
    lg: 1200,
  },
};

export default theme;
