import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const Posts: React.FC<IPosts> = ({ name, thc, cbd, body, user }) => (
  <Items>
    <UserBanner>
      <Username>{user.username}</Username>
      <ProfilePhoto></ProfilePhoto>
    </UserBanner>
    <StrainInfo>
      <StrainImage>
        <Image src='/img/nug02.png' layout='fill' alt={name + ' photo'} />
      </StrainImage>
      <TextWrapper>
        <StrainName>{name}</StrainName>
        <StrainData>
          <Percents>THC: {thc}%</Percents>
          <Percents>CBD: {cbd}%</Percents>
        </StrainData>
        <StrainType>Indica</StrainType>
      </TextWrapper>
    </StrainInfo>
    <Bottom>
      <Body>
        {body.slice(0, 100)}
      </Body>
    </Bottom>
  </Items >
)

interface IPosts {
  name: string,
  thc: string,
  cbd: string,
  body: string,
  user: {
    username: string
  }
}

export default Posts

const Items = styled.div`
  display: flex;
  flex-flow: column;
  margin: 24px auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.palette.primary.main};
  height: auto;
`

const UserBanner = styled.div`
  width: 100%;
  height: 40px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Username = styled.p`
  font-family: ${props => props.theme.font.secondary};
  font-weight: 300;
  line-height: 1.2;
  margin-left: 16px;
`

const ProfilePhoto = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${props => props.theme.palette.tertiary.main};
  border: 1px solid white;
  margin-right: 16px;
`

const StrainImage = styled.div`
  height: 85px;
  width: 85px;
  position: relative;
`

const StrainInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`

const TextWrapper = styled.div`
  padding: 20px 15px;
  margin-left: 24px;
`

const StrainName = styled.p`
  font-size: 16px;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.secondary};
  margin-bottom: 0;
`

const StrainData = styled.div`
  display: flex;
  flex-direction: row;
`

const Percents = styled.p`
  font-size: 12px;
  font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.palette.tertiary.main};

  &:first-child {
    margin-right: 16px;
  }
`

const StrainType = styled.p`
  margin: 0;
  font-size: 24px;
  font-family: ${props => props.theme.font.primary};
`


const Body = styled.p`
  font-size: 12px;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.primary};
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 16px;
`