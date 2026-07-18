import { style } from '@vanilla-extract/css';
import { typography, media } from '@/shared/styles';

export const section = style({
  width: '100%',
  minWidth: 0,
  '@media': {
    [media.mobile]: {
      display: 'flex',
      flexDirection: 'column',
      gap: '0.94rem',
    },
  },
});

export const mobileSectionTitle = style({
  display: 'none',
  '@media': {
    [media.tablet]: {
      display: 'none',
    },
    [media.mobile]: {
      display: 'block',
    },
  },
});

export const tabletSectionTitle = style({
  display: 'none',
  '@media': {
    [media.tablet]: {
      display: 'block',
      width: '100%',
      ...typography.correction,
      ...typography.tablet.h2,
    },
    [media.mobile]: {
      display: 'none',
    },
  },
});

export const container = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  minWidth: 0,
  '@media': {
    [media.belowDesktop]: {
      boxShadow: '0 0 2px 0 rgba(17, 17, 17, 0.20)',
      borderRadius: '0.3125rem',
      flexDirection: 'column',
    },
    [media.tablet]: {
      padding: '1.25rem 1.25rem 2rem',
      gap: '0.62rem',
    },
    [media.mobile]: {
      padding: '0.75rem',
    },
  },
});

export const groups = style({
  display: 'flex',
  flexDirection: 'row',
  width: '100%',
  minWidth: 0,
  gap: '1.44rem',
  '@media': {
    [media.tablet]: {
      gap: '1.5rem',
    },
    [media.mobile]: {
      gap: '0.75rem',
    },
  },
});

export const groupItem = style({
  flex: '1 1 0',
  minWidth: 0,
});
