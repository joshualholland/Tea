import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import ReviewMain from '../page-components/reviews/ReviewMain'

const user: string = 'John Doe'

const ReviewPost: NextPage = () => {
  return (
    <>
      <NextSeo
        title={`${user}'s cannabis reviews on Cannapi`}
        description={`${user}'s activity on Cannapi, with strain reviews, dispensaries, and more.`}
      />
      <ReviewMain />
    </>
  )
}

export default ReviewPost