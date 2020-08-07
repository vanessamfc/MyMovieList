import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#e53935',
    },

    secondary: { main: '#ff6f60', dark: '#424242' },

    grayColor: {
      main: '#424242',
    },
  },
});

export default theme;
