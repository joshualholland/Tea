import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import BackgroundHero from '../page-components/profile/BackgroundHero'

const user: string = 'CannapiUser1234'

const Profile: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${user} on Cannapi`}
        description={`${user}'s activity on Cannapi, with strain reviews, dispensaries, and more.`}
      />
      <BackgroundHero />
    </>
  )
}

export default Profile