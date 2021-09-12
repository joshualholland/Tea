import type { NextPage } from 'next'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../utils/styles/theme'
import { NextSeo } from 'next-seo'
import Nav from '../components/Nav'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Cannapi'
        description='With Cannapi add to the cannabis culture by reviewing strains and keep up with your liked strains.'
      />
    </>
  )
}

export default Home
