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
            <Image 
             src={post.photo} //I'm not doing this correctly, next/image wants a url
             // I want to add border-radius but next/img only accepts className to do this - will add later
             //alt="Picture of the author"
             width={700}
             height={500}
             />
            <Title>{post.title}</Title>
             {/* Button not displaying as intended. Want it under the title. CSS I can come back to.s */}
            <PrimaryButton />
            <Body>
              {post.body}
            </Body>
           
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
  width: 100%;
  margin-top: 1.5em;  
  margin-bottom: 1.5em;  
  background: ${props => props.theme.palette.common.white};
  height: auto;
  border-radius: ${props => props.theme.borderRadius};
`

const List = styled.ul<IProps>`
  margin: 1em; 
  padding: 1em 1em; 
  list-style: none;
`

const Items = styled.li<IProps>`
  display: flex;
  flex-flow:row;
  margin: 1.5em;
  padding: 1.2em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.palette.common.white};   
  color: ${props => props.theme.palette.tertiary.main};
 
`

const Title = styled.h3<IProps>`
  margin: 1em;  
  width: 90%; 
  display: block;
`

const Body = styled.p<IProps>`
  font-size: 12px;
  color: ${props => props.theme.palette.common.black};
`