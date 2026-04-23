import { style } from '@vanilla-extract/css';
import { color } from '@/shared/styles/color.css';

export const controls = style({
  display: 'flex',
  gap: '0.625rem',
});

export const button = style({
  width: '2.5rem',
  height: '2.5rem',
  borderRadius: '50%',
  border: 'none',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease-in-out',
  backgroundColor: color.brand.main,
  color: color.text.main,

  ':disabled': {
    backgroundColor: color.brand.gray2,
    cursor: 'not-allowed',
  },
});

export const icon = style({
  width: '0.5rem',
  height: '0.875rem',
  aspectRatio: '1/2',
});
