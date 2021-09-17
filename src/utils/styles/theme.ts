import { DefaultTheme } from 'styled-components'

export const defaultTheme: DefaultTheme = {
  borderRadius: '8px',
  palette: {
    common: {
      black: '#222831',
      white: '#ffffff'
    },
    primary: {
      main: '#B7FFD8',
      contrastText: '#ffffff'
    },
    secondary: {
      main: '#ffa824',
      contrastText: '#ffffff'
    },
    tertiary: {
      main: '#b084cc',
      contrastText: '#ffffff'
    }
  },
  font: {
    primary: 'Quicksand',
    secondary: 'Pacifico'
  }
};