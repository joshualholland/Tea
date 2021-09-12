import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'

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