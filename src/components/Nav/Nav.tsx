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
          <MobileProfile href='/Profile'><Profile></Profile></MobileProfile>
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
`

const Logo = styled.div<IProps>`
  font-size: 24px;
  font-family: ${props => props.theme.font.secondary};
  color: ${props => props.theme.palette.tertiary.main};
  text-decoration: none;

  ${breakpoints.tablet} {
    margin: 0;
  }
`

const Link = styled.a`
  text-decoration: none;

  @media (min-width: 768px) {
    order: -1;
  }
`

const Profile = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: ${props => props.theme.palette.tertiary.main};
  margin-left: auto;

  ${breakpoints.tablet} {
    margin: 0;
  }
`

const MobileProfile = styled.a`
  flex: 1;

  ${breakpoints.tablet} {
    display: none;
  }
`

