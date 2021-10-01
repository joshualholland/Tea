import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/styles/breakpoints'
import Burger from './Burger'

const Nav: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <Items>
          <Burger />
          <Link href='/'>
            <Logo>Cannapi</Logo>
          </Link>
          <Profile href='/profile'><div></div></Profile>
        </Items>
      </Inner>
    </Wrapper>
  )
}

enum VARIANT {
  PRIMARY,
  SECONDARY
}

interface IProps {
  variant?: VARIANT
}

export default Nav

const Wrapper = styled.header`
  background-color: #fff;
  box-shadow: rgb(0 0 0 / 10%) 0px 2px 10px 0px;
  padding: 1rem;
  display: flex;
  align-items: center;
`

const Inner = styled.div`
  width: 100%;
  max-width: 1048px;
  margin: 0 auto;
  padding: 0 12px;
  height: 52px;
`

const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  @media ${breakpoints.tablet} {
    width: 100%;
    justify-content: flex-end;
  }
`

const Logo = styled.div<IProps>`
  font-size: 24px;
  font-family: ${props => props.theme.font.secondary};
  color: ${props => props.theme.palette.tertiary.main};
  text-decoration: none;

  @media ${breakpoints.tablet} {
    margin: 0;
  }
`

const Link = styled.a`
  text-decoration: none;

  @media ${breakpoints.tablet} {
    order: -1;
    margin-right: auto;
  }
`

const Profile = styled.a`
  @media (max-width: 768px) {
    flex: 1;
  }

  @media ${breakpoints.tablet} {
    margin-left: 32px;
  }

  div {
    height: 36px;
    width: 36px;
    border-radius: 50%;
    background-color: ${props => props.theme.palette.tertiary.main};
    margin-left: auto;

    @media ${breakpoints.tablet} {
      margin: 0;
    }
  }
`

