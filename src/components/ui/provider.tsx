'use client';

import {
  ChakraProvider,
  defineConfig,
  createSystem,
  defaultConfig,
} from '@chakra-ui/react';
import { generateTwColorPalette } from '../../utils/color-palette';
import { ColorModeProvider, type ColorModeProviderProps } from './color-mode';
import theme from '../../styles/theme';

function getTokenSchema(color: string) {
  const palette = generateTwColorPalette(color);
  return Object.fromEntries(
    Object.entries(palette).map(([key, value]) => [key, { value }])
  );
}

const uiConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        primary: getTokenSchema(theme.colors.primary),
        secondary: getTokenSchema(theme.colors.secondary),
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          solid: { value: '{colors.primary.500}' },
          contrast: { value: '{colors.primary.100}' },
          fg: { value: '{colors.primary.700}' },
          muted: { value: '{colors.primary.100}' },
          subtle: { value: '{colors.primary.200}' },
          emphasized: { value: '{colors.primary.300}' },
          focusRing: { value: '{colors.primary.500}' },
        },
        secondary: {
          solid: { value: '{colors.secondary.500}' },
          contrast: { value: '{colors.secondary.100}' },
          fg: { value: '{colors.secondary.700}' },
          muted: { value: '{colors.secondary.100}' },
          subtle: { value: '{colors.secondary.200}' },
          emphasized: { value: '{colors.secondary.300}' },
          focusRing: { value: '{colors.secondary.500}' },
        },
      },
    },
  },
});

const uiColorSystem = createSystem(defaultConfig, uiConfig);

export function ChakraUiProvider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={uiColorSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
