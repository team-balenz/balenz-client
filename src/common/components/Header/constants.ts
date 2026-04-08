export const NAV_ITEMS = [
  { label: '이념 관점', href: '/' },
  { label: '글로벌 관점', href: '/global' },
];

export const DEFAULT_ACTIVE_TAB = NAV_ITEMS[0].label;

export const LOGO_SIZE = {
  desktop: {
    width: '167px',
    height: '32px',
    aspectRatio: '167/32',
  },
  tablet: {
    width: '126px',
    height: '24px',
    aspectRatio: '21/4',
  },
  mobile: {
    width: '105px',
    height: '20px',
    aspectRatio: '21/4',
  },
};

export const HEADER_LAYOUT = {
  desktop: {
    padding: '0 80px',
    height: '80px',
  },
  tablet: {
    padding: '0 40px',
    height: '70px',
  },
  mobile: {
    padding: '70px 20px 15px 20px',
    height: 'fit-content',
  },
};

export const ICONS = {
  menu: '/icons/ic_menu.svg',
  search: '/icons/ic_search.svg',
};
