import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const BackgroundHero: React.FC = () => (
  <Wrapper>
    {/* <Image
      src='/img/Cannapi_Profile.png'
      alt='Default profile photo'
      layout='fill'
      objectFit='contain'
    /> */}
    <Container>
      <UserInfo>
        <ProfilePhoto></ProfilePhoto>
        <TextContainer>
          <Username>CannapiUser1234</Username>
          <Stats>
            <Items>420 Strains</Items>
            <Items>19 Badges</Items>
            <Items>69 Friends</Items>
          </Stats>
        </TextContainer>
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
  max-width: 1080px;
  margin: 16px auto;
  padding: 0 32px;
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
  align-items: center;
`

const ProfilePhoto = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 50%;
  background-color: ${props => props.theme.palette.common.black};
  border: 1px solid white;
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
`

const Username = styled.h3`
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.secondary};
  font-size: 32px;
  font-weight: 500;
  margin: 0;
`

const Stats = styled.div`
  display: flex;
  flex-direction: row;
`

const Items = styled.p`
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.primary};
  font-size: 24px;
  margin: 12px 12px 0 0;
`