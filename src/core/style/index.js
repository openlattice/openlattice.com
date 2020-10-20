/*
 * @flow
 */

import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 480,
      md: 600,
      lg: 960,
      xl: 1280,
    },
  },
  typography: {
    fontFamily: "'Inter', 'Arial', sans-serif",
    h1: {
      fontSize: '3.5rem', // 56px
      fontWeight: 700,
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    h2: {
      fontSize: '2.25rem', // 36px
      fontWeight: 600,
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    h3: {
      fontSize: '2rem', // 32px
      fontWeight: 500,
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    h4: {
      fontSize: '1.75rem', // 28px
      fontWeight: 500,
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    h5: {
      fontSize: '1.5rem', // 24px
      fontWeight: 500,
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    h6: {
      fontSize: '1.25rem', // 20px
      fontWeight: 500,
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem', // 16px
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
    body2: {
      fontSize: '1.125rem', // 18px
      fontWeight: 400,
      letterSpacing: '0em',
      lineHeight: 1.5,
    },
  },
});

const responsiveTheme = responsiveFontSizes(theme);

export {
  responsiveTheme as theme,
};
