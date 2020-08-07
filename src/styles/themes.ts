import { createMuiTheme, Theme } from '@material-ui/core/styles';

// @ts-ignore
interface MovieListTheme extends Theme {
  palette: {
    primary: {
      main: string;
    };

    secondary: { main: string; dark: string };
    grayColor: { main: string };
  };
}

const palette = {
  primary: {
    main: '#e53935',
  },

  secondary: { main: '#ff6f60', dark: '#424242' },

  grayColor: {
    main: '#424242',
  },
};

const theme = createMuiTheme({
  palette,
});

export default (theme as unknown) as MovieListTheme;
