import { createMuiTheme } from '@material-ui/core/styles';

import RobotoWoff2 from './styles/fonts/Roboto/regular.woff2';

const Roboto = {
  fontFamily: 'Roboto',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  src: `
    url(${RobotoWoff2}) format('woff2')
  `,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export const AppTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#1976d2',
      light: '#4791db',
      dark: '#115293',
    },
    secondary: {
      main: '#f3b239',
    },
    success: {
      main: '#51b651',
    },
    error: {
      main: '#d96565',
    },
    type: 'light',
  },
  typography: {
    fontFamily: 'Roboto, Arial',
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [Roboto],
      },
    },
  },
});
