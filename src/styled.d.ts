// styled.d.ts
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      black: string;
      white: string;
      primary: string;
      secondary: string;
      disabled: string;
      focused: string;
      primary_text: string;
      secondary_text: string;
      tertiary_text: string;
      highlight_primary_text: string;
      highlight_secondary_text: string;
      highlight_tertiary_text: string;
      disabled_text: string;
      focused_text: string;
      primary_background: string;
      secondary_background: string;
      tertiary_background: string;
      card_background: string;
      primary_outline: string;
      secondary_outline: string;
      disabled_outline: string;
      focused_outline: string;
      primary_component: string;
      secondary_component: string;
      disabled_component: string;
      focused_component: string;
    };
    border: {
      radius: {
        small: string;
        medium: string;
        large: string;
      };
    };
    font: {
      family: {
        primary: string;
        heading: string;
      };
      weight: {
        normal: number;
        medium: number;
        bold: number;
        extrabold: number;
      };
      size: {
        '2xs': string;
        xs: string;
        sm: string;
        md: string;
        lg: string;
        xl: string;
        '2xl': string;
        '3xl': string;
        '4xl': string;
        '5xl': string;
        '6xl': string;
        '7xl': string;
        '8xl': string;
        '9xl': string;
      };
    };
    breakpoints: {
      mobile: number;
    };
    maxwidth: number;
  }
}
