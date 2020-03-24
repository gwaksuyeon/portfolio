import { createMuiTheme } from '@material-ui/core/styles';

export const Theme = createMuiTheme({
  palette: {
    primary: {
      main: '#DB2017'
    },
    text: {
      primary: '#505050'
    }
  },
  typography: {
    fontSize: 12,
    fontFamily: [
      'NanumSquare',
      'sans-serif',
    ].join(','),
  },
})