import type { NextPage } from 'next'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '../utils/styles/theme'
import { NextSeo } from 'next-seo'
import Nav from '../components/Nav'

const user: string = 'John Doe'

const Profile: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${user} on Cannapi`}
        description={`${user}'s activity on Cannapi, with strain reviews, dispensaries, and more.`}
      />
    </>
  )
}

export default Profile