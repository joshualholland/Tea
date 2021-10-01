import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import PrimaryButton from '../components/PrimaryButton'

const Posts: React.FC<IPosts> = ({ title, strain, body, photo, user }) => (
  <Items>
    <ImageWrapper>
      <StyledImage src={photo}
        layout='fill'
        objectFit='cover'
      />
    </ImageWrapper>
    <TextWrapper>
      <Title>{title}</Title>
      <StrainName>{strain}</StrainName>
      <Body>
        {/* slicing the string to 100 characters, maybe we do it with words? */}
        {body.slice(0, 115)}
      </Body>
      {/* Button not displaying as intended. Want it under the title. CSS I can come back to.s */}
      <PrimaryButton />
    </TextWrapper>
  </Items>
)

interface IPosts {
  title: string,
  strain: string,
  body: string,
  photo: string,
  user: object,
}

export default Posts

const Items = styled.li`
  display: flex;
  flex-flow: column;
  margin: 24px auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.palette.primary.main};
  height: auto;
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

const StyledImage = styled(Image)`
  border-radius: 8px 8px 0px 0px;
`