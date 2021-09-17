import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../utils/styles/breakpoints'

const Nav: React.FC = () => {
  return (
    <Wrapper>
      <Inner>
        <Items>
          <Logo>Cannapi</Logo>
          <Right>
            <Link href='/'>Home</Link>
            <Link>Messages</Link>
            <Link>Notifications</Link>
            <Link href='/Profile'><Profile></Profile></Link>
          </Right>
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
  align-items: flex-end;
`

const Logo = styled.div<IProps>`
  font-size: 24px;
  font-family: ${props => props.theme.font.secondary};
  color: ${props => props.theme.palette.primary.main};
  text-decoration: none;
`

const Right = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: auto;
  align-items: center;
`

const Link = styled.a`
  margin-left: 24px;
  font-family: ${props => props.theme.font.primary};
  text-decoration: none;
  color: #000000;

  &:first-child() {
    margin-left: 0;
  }
`

const Profile = styled.div`
  height: 36px;
  width: 36px;
  border-radius: 50%;
  background-color: ${props => props.theme.palette.primary.main};
`

