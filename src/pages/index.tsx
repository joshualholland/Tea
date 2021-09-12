import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'

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
