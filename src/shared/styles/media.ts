export const breakpoints = {
  mobile: 719,
  tablet: 1023,
} as const;

export const media = {
  mobile: `screen and (max-width: ${breakpoints.mobile}px)`,
  tablet: `screen and (min-width: ${breakpoints.mobile + 1}px) and (max-width: ${breakpoints.tablet}px)`,
  belowDesktop: `screen and (max-width: ${breakpoints.tablet}px)`,
  desktop: `screen and (min-width: ${breakpoints.tablet + 1}px)`,
} as const;
