import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import StrainDisplay from '../page-components/strains/StrainDisplay'

const user: string = 'John Doe'

const Strains: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${user}'s cannabis strains on Cannapi`}
        description={`${user}'s activity on Cannapi, with strain reviews, dispensaries, and more.`}
      />
      <StrainDisplay />
    </>
  )
}

export default Strains