import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { posts } from '../../utils/data/reviewposts'
import PrimaryButton from '../../components/PrimaryButton'

const ReviewLists: React.FC = () => (
  <Wrapper>
    <ListWrapper>
      <List>
        {/* Checks for posts array and maps through it if it exists */}
        {posts && posts.map((post, index) => (
          <Items key={index}>
            {/* tried to get this to work for the background image but an Img can't have children? just made a static image on the Items */}
            <ImageWrapper>
              <StyledImage src={post.photo}
                layout='fill'
                objectFit='contain'
              >
              </StyledImage>
            </ImageWrapper>
            <TextWrapper>
              <Title>{post.title}</Title>
              <Body>
                {/* slicing the string to 100 characters, maybe we do it with words? */}
                {post.body.slice(0, 115)}
              </Body>
              {/* Button not displaying as intended. Want it under the title. CSS I can come back to.s */}
              <PrimaryButton />
            </TextWrapper>
          </Items>
        ))}
      </List>
    </ListWrapper>
  </Wrapper>
)

interface IProps {
  variant?: VARIANT
}

enum VARIANT {
  PRIMARY,
  SECONDARY
}

export default ReviewLists

const Wrapper = styled.section<IProps>`
  width: 100%;
  max-width: 70vw;
  margin: 16px auto;
  border-radius: ${props => props.theme.borderRadius};
`

const ListWrapper = styled.div<IProps>`
  width: 80%;
  margin-top: 1.5em;  
  margin-bottom: 1.5em;  
`

const List = styled.ul<IProps>`
  max-width: 1080px;
  margin: 0 auto; 
  padding: 1em 1em; 
  list-style: none;
`

const Items = styled.li<IProps>`
  display: flex;
  flex-flow: column;
  margin: 24px auto;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: ${props => props.theme.borderRadius};
  color: ${props => props.theme.palette.primary.main};
`

const TextWrapper = styled.div`
  padding: 24px;
`

const Title = styled.h3<IProps>`
  font-size: 24px;
  font-family: ${props => props.theme.font.primary};
`

const Body = styled.p<IProps>`
  font-size: 12px;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.primary};
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 400px;
  position: relative;
`

const StyledImage = styled(Image)`
  border-radius: 8px;
`