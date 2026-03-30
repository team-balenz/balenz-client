/* color.css.ts */

import { createGlobalTheme } from '@vanilla-extract/css';

export const color = createGlobalTheme(':root', {
  text: {
    inverse: '#FCFCFC',
    disabled: '#999999',
    tertiary: '#767676',
    secondary: '#505050',
    main: '#111111',
  },
  brand: {
    main: '#1C232B',
    background: '#FCFCFC',
    progressive: '#23A2FF',
    center: '#A463FF',
    conservative: '#FF4848',
  },
  system: {
    success: '#2E7D32',
    warning: '#ED6C02',
    error: '#C62828',
    info: '#0288D1',
  },
});
