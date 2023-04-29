import { createTheme, ThemeProvider } from "@mui/material";

import { ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    mode: 'light',
    primary: {
      main: '#009688',
    },
    secondary: {
      main: '#ff8c4a',
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
const theme = createTheme(themeOptions);

export default theme;