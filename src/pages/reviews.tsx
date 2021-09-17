import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import ReviewLists from '../page-components/reviews/ReviewList'

const user: string = 'John Doe'

const Profile: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${user}'s cannabis reviews on Cannapi`}
        description={`${user}'s activity on Cannapi, with strain reviews, dispensaries, and more.`}
      />
      <ReviewLists />
    </>
  )
}

export default Profile