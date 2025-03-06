import color from 'color';

const calculateDarkenValue = (shade: number, mainShade: number): number => {
  return (shade - mainShade) / 100 / 2;
};

export type TwColorPalette = {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  '950': string;
};

/**
 * Generate color palette
 * @param baseColor base color for 500
 * @returns color palette object
 * @example
 * ```
 * {
 *     '50': '#ecfdff',
 *     '100': '#d0f8fd',
 *     '200': '#a7eefa',
 *     '300': '#6ae2f6',
 *     '400': '#27cae9',
 *     '500': '#0aa3c4',
 *     '600': '#0c8aae',
 *     '700': '#116e8d',
 *     '800': '#175a73',
 *     '900': '#184b61',
 *     '950': '#093043',
 * }
 * ```
 */
export function generateTwColorPalette(baseColor: string): TwColorPalette {
  const c = color(baseColor).hsl();
  //   const lightness = c.lightness();

  return [
    50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950,
  ].reduce<TwColorPalette>((res, shade) => {
    return {
      ...res,
      [shade]: c.darken(calculateDarkenValue(shade, 500)).hex(),
    };
  }, {} as TwColorPalette);
}
