'use client';

import type { PropsWithChildren } from 'react';
import {
  ChakraProvider,
  defineConfig,
  createSystem,
  defaultConfig,
} from '@chakra-ui/react';
// import { generateTwColorPalette } from '../../utils/color-palette';
// import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import theme from '../../styles/theme';

// function getTokenSchema(color: string) {
//   const palette = generateTwColorPalette(color);
//   return Object.fromEntries(
//     Object.entries(palette).map(([key, value]) => [key, { value }])
//   );
// }

const uiConfig = defineConfig({
  theme: {
    semanticTokens: {
      colors: {
        outline: {
          solid: {
            value: {
              _dark: theme.colors.primary_outline,
              _light: theme.colors.secondary_outline,
            },
          },
          contrast: {
            value: {
              _dark: theme.colors.secondary_outline,
              _light: theme.colors.primary_outline,
            },
          },
          fg: {
            value: {
              _dark: theme.colors.white,
              _light: theme.colors.black,
            },
          },
          bg: {
            value: {
              _dark: theme.colors.black,
              _light: theme.colors.white,
            },
          },
        },
      },
    },
  },
});

const uiSystem = createSystem(defaultConfig, uiConfig);

export function ChakraUiProvider({ children }: PropsWithChildren<{}>) {
  return <ChakraProvider value={uiSystem}>{children}</ChakraProvider>;
}
