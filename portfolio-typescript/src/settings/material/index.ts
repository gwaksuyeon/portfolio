import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#DB2017'
    }
  },
  typography: {
    fontFamily: [
      'NanumSquare',
      'sans-serif',
    ].join(','),
  }
})