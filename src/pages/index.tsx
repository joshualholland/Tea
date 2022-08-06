import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import Recents from '../page-components/home/Recents'
import { ProfileSection } from '../page-components/home/ProfileSection'
const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Cannapi'
        description='With Cannapi add to the cannabis culture by reviewing strains and keep up with your liked strains.'
      />
      <Wrapper>
        <ProfileSection />
        <Recents />
      </Wrapper>
    </>
  )
}

export default Home

const Wrapper = styled.section`
  padding: 0 16px;
  margin-top: 24px;
  display: flex;
  flex-direction: row;
  justify-content: center;
`