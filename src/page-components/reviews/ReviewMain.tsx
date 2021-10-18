import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { posts } from '../../utils/data/reviewposts'
import PrimaryButton from '../../components/Buttons/PrimaryButton'


let post = posts[0]; {/*getting first post from reviews*/ }

const ReviewMain: React.FC = () => (
  <Wrapper>
    <ImageWrapper>
      <StyledImage src={post.photo}
        layout='fill'
        objectFit='cover'
      >
      </StyledImage>
    </ImageWrapper>
    <TextWrapper>
      <Title>{post.title}</Title>
      <StrainName>{post.strain}</StrainName>
      <Body>
        {/* slicing the string to 100 characters, maybe we do it with words? */}
        {post.body}
      </Body>
      {/* Button not displaying as intended. Want it under the title. CSS I can come back to.s */}
      <PrimaryButton>
        More Reviews
      </PrimaryButton>
    </TextWrapper>
  </Wrapper>
)

interface IProps {
  variant?: VARIANT
}

enum VARIANT {
  PRIMARY,
  SECONDARY
}

export default ReviewMain

const Wrapper = styled.section<IProps>`
  width: 100%;
  max-width: 70vw;
  margin: 16px auto;
  border-radius: ${props => props.theme.borderRadius};
`

const TextWrapper = styled.div`
  padding: 24px;
`

const Title = styled.h3<IProps>`
  font-size: 24px;
  font-family: ${props => props.theme.font.primary};
`


const StrainName = styled.p<IProps>`
  font-size: 16px;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.secondary};
`

const Body = styled.p<IProps>`
  font-size: 14px;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.primary};
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
`

const StyledImage = styled(Image)`
  border-radius: 8px;
`