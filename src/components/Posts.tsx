import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import PrimaryButton from '../components/PrimaryButton'

const Posts: React.FC<IPosts> = ({ title, strain, body, photo, user }) => (
  <Items>
    <UserBanner>
      <Username>{user.username}</Username>
      <ProfilePhoto></ProfilePhoto>
    </UserBanner>
    <ImageWrapper>
      <Image src={photo}
        layout='fill'
        objectFit='cover'
        alt='post photo'
      />
    </ImageWrapper>
    <TextWrapper>
      <Title>{title}</Title>
      <StrainName>{strain}</StrainName>
      <Body>
        {/* slicing the string to 100 characters, maybe we do it with words? */}
        {body.slice(0, 115)}
      </Body>
    </TextWrapper>
  </Items>
)

interface IPosts {
  title: string,
  strain: string,
  body: string,
  photo: string,
  user: {
    username: string
  }
}

export default Posts

const Items = styled.div`
  display: flex;
  flex-flow: column;
  margin: 24px auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.palette.primary.main};
  height: auto;
`

const UserBanner = styled.div`
  background-color: ${props => props.theme.palette.primary.main};
  width: 100%;
  height: 40px;
  color: white;
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
  background-color: ${props => props.theme.palette.secondary.main};
  border: 1px solid white;
  margin-right: 16px;
`

const TextWrapper = styled.div`
  padding: 20px 15px;
`

const Title = styled.h3`
  font-size: 30px;
  font-family: ${props => props.theme.font.primary};
  margin: 5px;
`

const StrainName = styled.p`
  font-size: 16px;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.secondary};
`


const Body = styled.p`
  font-size: 12px;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.primary};
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`