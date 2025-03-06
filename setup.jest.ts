import '@testing-library/jest-dom';
/** @see https://github.com/jsdom/jsdom/issues/3363#issuecomment-1311063228 */
import 'core-js/stable/structured-clone';
/** @see https://github.com/jsdom/jsdom/issues/2524#issuecomment-736672511 */
import { TextEncoder, TextDecoder } from 'util';
global.TextEncoder = TextEncoder as any;
global.TextDecoder = TextDecoder as any;
/** @see https://github.com/jsdom/jsdom/issues/3522#issuecomment-2486618812 */
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(), // Deprecated
    removeListener: jest.fn(), // Deprecated
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
});
