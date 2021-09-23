import React from 'react'
import styled from 'styled-components'

const BackgroundHero: React.FC = () => (
  <Wrapper>
    <Container>
      <UserInfo>
        <ProfilePhoto></ProfilePhoto>
        <Username>CannapiUser1234</Username>
        <Stats>
          <Items>420 Strains</Items>
          <Items>19 Badges</Items>
          <Items>69 Friends</Items>
        </Stats>
      </UserInfo>
    </Container>
  </Wrapper>
)

interface IProps {
  variant?: VARIANT
}

enum VARIANT {
  PRIMARY,
  SECONDARY
}

export default BackgroundHero

const Wrapper = styled.section<IProps>`
  width: 100%;
  max-width: 1080px;
  margin: 16px auto;
`

const Container = styled.div<IProps>`
  background: ${props => props.theme.palette.tertiary.main};
  width: 100%;
  height: 400px;
  border-radius: ${props => props.theme.borderRadius};
  position: relative;
`

const UserInfo = styled.div`
  position: absolute;
  left: 20px;
  right: 20px;
  bottom: 20px;
  display: flex;
  flex-direction: row;
`

const ProfilePhoto = styled.div`
  height: 50px;
  width: 50px;
  border-radius: 50%;
  background-color: ${props => props.theme.palette.common.black};
  border: 1px solid white;
`

const Username = styled.h3`
  color: ${props => props.theme.palette.common.black};
  font-size: 32px;
  font-weight: 500;
`

const Stats = styled.div`
  display: flex;
  flex-direction: row;
`

const Items = styled.p`
  color: ${props => props.theme.palette.common.black};
  font-size: 24px;
`