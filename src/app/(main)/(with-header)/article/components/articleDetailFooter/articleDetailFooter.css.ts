import { style } from '@vanilla-extract/css';
import { breakpoints, color, typography, media } from '@/shared/styles';

export const container = style({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const tooltipContainer = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.31rem',
  userSelect: 'none',
  WebkitUserSelect: 'none',
  WebkitTouchCallout: 'none',
});

export const insightsTrigger = style({
  cursor: 'default',
});

export const reportTrigger = style({
  cursor: 'pointer',
});

export const reportRowTouch = style({
  display: 'flex',
  alignItems: 'center',
  gap: '0.31rem',
});

export const reportTooltipIconBtn = style({
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
});

export const reportClickable = style({
  display: 'flex',
  alignItems: 'center',
  flex: 1,
  cursor: 'pointer',
});

export const tooltipText = style({
  color: color.text.tertiary,
  ...typography.desktop.body2,
  '@media': {
    [media.tablet]: {
      ...typography.tablet.body2,
    },
    [media.mobile]: {
      ...typography.phone.body3,
    },
  },
});

export const insightsTooltipEmphasis = style({
  '@media': {
    [`screen and (min-width: ${breakpoints.mobile + 1}px)`]: {
      fontWeight: 700,
    },
  },
});
