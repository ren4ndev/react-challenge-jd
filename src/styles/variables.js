export const queries = {
  xxs: '360px',
  xs: '425px',
  s: '640px',
  m: '768px',
  l: '1024px',
  xl: '1280px',
  xxl: '1440px',
};

export const colors = {
  primary: '#00A870',
  secondary: '#5E20A4',
  gray: '#3D3D3D',
  white: '#FFFFFF',
  black: '#000000',
};

export const fontType = {
  heading1: {
    desk: {
      as: 'h1',
      fontSize: '40px',
      lineHeight: '48px',
    },
    mobile: {
      fontMobile: '28px',
      lineMobile: '32px',
    },
  },
  body: {
    desk: {
      as: 'p',
      fontSize: '18px',
      lineHeight: '24px',
    },
    mobile: {
      fontMobile: '16px',
      lineMobile: '28px',
    },
  },
  button: {
    desk: {
      as: 'span',
      fontSize: '14px',
      lineHeight: '20px',
    },
    mobile: {
      fontMobile: '14px',
      lineMobile: '20px',
    },
  },
};
