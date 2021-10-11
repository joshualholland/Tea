import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import { breakpoints } from '../utils/styles/breakpoints'
import Recents from '../page-components/home/Recents'
import CreateButton from '../page-components/home/CreateButton'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Cannapi'
        description='With Cannapi add to the cannabis culture by reviewing strains and keep up with your liked strains.'
      />
      <Wrapper>
        <CreateButton />
        <Recents />
      </Wrapper>
    </>
  )
}

export default Home

interface IProps {
  variant?: VARIANT
}

enum VARIANT {
  PRIMARY,
  SECONDARY
}

const Wrapper = styled.section`
  padding: 0 16px;
  margin-top: 24px;
`