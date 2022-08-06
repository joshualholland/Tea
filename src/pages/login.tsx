import type { NextPage } from 'next'
import React from 'react'
import { NextSeo } from 'next-seo'
import styled from 'styled-components'
import { LoginForm } from '../page-components/login/LoginForm'

const LoginPage: NextPage = () => {
  return (
    <>
      <NextSeo
        title='Login'
        description='Login to review and rate your strains.'
      />
      <Wrapper>
        <LoginForm />
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  padding: 0 16px;
  margin: 0 auto;
`

export default LoginPage