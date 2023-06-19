import { createTheme, responsiveFontSizes } from "@mui/material";

import { ThemeOptions } from '@mui/material/styles';

const primaryLight = "#4FADB3";
const primaryDark = "#196B70";
const secondaryLight = "#C76374";
const secondaryDark = "#822A39";
const white ="#f5f5f5"
const black ="#1a1a1a"

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#2499A0',
      light: primaryLight,
      dark: primaryDark,
    },
    secondary: {
      main: '#BA3D52',
      light: secondaryLight,
      dark: secondaryDark,
    },
    background: {
      default: '#f5f5f5',
      paper: '#f5f5f5',
    },
    text: {
      primary: 'rgba(26,26,26,0.87)',
      secondary: 'rgba(26,26,26,0.6)',
      disabled: 'rgba(26,26,26,0.38)',
    },
    error: {
      main: '#d32f2f',
    },
    info: {
      main: '#2196f3',
    },
  },
  typography: {
    fontWeightLight: 400,
    fontWeightRegular: 500,
    fontWeightMedium: 600,
    fontFamily: '"PT Sans", "Helvetica Neue", Helvetica, sans-serif',
  },
  shape: {
    borderRadius: 4,
  },
};
let theme = createTheme(themeOptions);
theme = responsiveFontSizes(theme);

export {theme, primaryLight, primaryDark, secondaryLight, secondaryDark, white, black};
