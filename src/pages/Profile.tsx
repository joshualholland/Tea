import type { NextPage } from 'next'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../utils/styles/theme'
import Nav from '../components/Nav'

const Profile: NextPage = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Nav />
    </ThemeProvider>
  )
}

export default Profile