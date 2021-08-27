import type { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../utils/styles/theme'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Nav />
    </ThemeProvider>
  )
}

export default Home

enum VARIANT {
  PRIMARY,
  SECONDARY
}

interface IProps {
  variant?: VARIANT
}

const Button = styled.button<IProps>`
  border-radius: ${props => props.theme.borderRadius};
  ${props => {
    switch (props.variant) {
      case VARIANT.SECONDARY:
        return `
          color: ${props.theme.palette.secondary.contrastText};
          background-color: ${props.theme.palette.secondary.main};
        `;
      case VARIANT.PRIMARY:
      default:
        return `
          color: ${props.theme.palette.primary.contrastText};
          background-color: ${props.theme.palette.primary.main};
        `;
    }
  }}
`
