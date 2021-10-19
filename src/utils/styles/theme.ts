import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
  borderRadius: '8px',
  palette: {
    common: {
      black: '#222831',
      white: '#ffffff'
    },
    primary: {
      main: '#40916C',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#CC8F3E',
      contrastText: '#ffffff'
    },
    tertiary: {
      // main: '#581845',
      main: '#966B9D',
      contrastText: '#ffffff'
    }
  },
  font: {
    primary: 'Quicksand',
    secondary: 'Pacifico'
  }
};