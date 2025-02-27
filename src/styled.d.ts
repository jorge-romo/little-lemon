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
      disabled_text: string;
      focused_text: string;
      primary_background: string;
      secondary_background: string;
      primary_highlight: string;
      secondary_highlight: string;
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
        secondary: string;
      };
      weight: {
        regular: number;
        medium: number;
        bold: number;
        extrabold: number;
      };
      size: {
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
      };
    };
  }
}
