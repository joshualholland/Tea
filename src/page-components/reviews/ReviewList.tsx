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
            {/* <StyledImage src={post.photo}
              width={800}
              height={200}
            >
              </StyledImage> */}
            <Title>{post.title}
              <Body>
                {/* slicing the string to 100 characters, maybe we do it with words? */}
                {post.body.slice(0, 115)} 
              </Body>
            </Title>
            {/* Button not displaying as intended. Want it under the title. CSS I can come back to.s */}
            <PrimaryButton />
            
            
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
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  width: 80%;
  margin-top: 1.5em;  
  margin-bottom: 1.5em;  
  background: ${props => props.theme.palette.common.white};
  height: auto;
  border-radius: ${props => props.theme.borderRadius};
`

const List = styled.ul<IProps>`
  width: 80%;
  margin: 1em; 
  padding: 1em 1em; 
  list-style: none;
`

const Items = styled.li<IProps>`
  display: flex;
  width: 80%;
  height: 160px;
  flex-flow:row;
  margin: 5em 1.5em;
  padding: 2.2em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: ${props => props.theme.borderRadius};
  background-image:url('https://c4.wallpaperflare.com/wallpaper/684/115/821/420-cannabis-marijuana-weed-wallpaper-preview.jpg');  //wasn't sure how to add this as a backgro
  background-repeat: no-repeat;
  background-size: cover;
  background-position: top center;
  color: ${props => props.theme.palette.primary.main};
 
`

const Title = styled.h3<IProps>`
  padding: 1em;
  height: 80px;
  font-size: 1.5em;
  background: rgba(0, 0, 0, .8);
  border-radius: ${props => props.theme.borderRadius};
  width: 60%; 
  display: block;
  font-family: ${props => props.theme.font.primary};
`

const Body = styled.p<IProps>`
  font-size: 12px;
  color: ${props => props.theme.palette.common.white};
  font-family: ${props => props.theme.font.primary};
`

const StyledImage = styled(Image)`
  border-radius: 8px;
`