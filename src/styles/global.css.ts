/* global.css.ts */

import { globalStyle } from '@vanilla-extract/css';

/* Set default box-sizing */
globalStyle('*, *::before, *::after', {
  boxSizing: 'border-box',
});

// #root 스타일
globalStyle('#root', {
  position: 'relative',
  width: '100%',
  minHeight: '100dvh',
  backgroundColor: '#fff',
});

// body 스타일
globalStyle('html, body', {
  fontFamily: `var(--font-pretendard), -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif`,
  scrollBehavior: 'smooth',
});

/* Remove default margin and padding */
globalStyle(
  'body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video',
  {
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: 'baseline',
  },
);

/* Remove list styles */
globalStyle('ol, ul', {
  listStyle: 'none',
});

/* Remove default styles for blockquote and q */
globalStyle('blockquote, q', {
  quotes: 'none',
});
globalStyle('blockquote:before, blockquote:after, q:before, q:after', {
  content: '',
});

/* Set default anchor styles */
globalStyle('a', {
  color: 'inherit',
  textDecoration: 'none',
});

/* Set default image and media styles */
globalStyle('img, video', {
  maxWidth: '100%',
  height: 'auto',
});

/* Set default button styles */
globalStyle('button', {
  cursor: 'pointer',
});

/* Remove default input and textarea styles */
globalStyle('input, textarea', {
  outline: 'none',
});
