import React from 'react'
import styled from 'styled-components'
import { posts } from '../../utils/data/reviewposts'

const ReviewLists: React.FC = () => (
  <Wrapper>
    <ListWrapper>
      <List>
        {/* Checks for posts array and maps through it if it exists */}
        {posts && posts.map((post, index) => (
          <Items key={index}>
            <Img />
            <Title>{post.title}</Title>
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
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: ${props => props.theme.borderRadius};
`

const ListWrapper = styled.div<IProps>`
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  width: 100%;
  margin-top: 1em;  
  background: ${props => props.theme.palette.common.white};
  height: 90vh;
  border-radius: ${props => props.theme.borderRadius};
`

const List = styled.ul<IProps>`
  margin: 1em; 
  list-style: none;
`

const Items = styled.li<IProps>`
  display: flex;
  flex-flow:row;
  margin: 1em;
  padding: 1.2em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.palette.common.white};   
  color: ${props => props.theme.palette.tertiary.main};
 
`


const Img = styled.div<IProps>`
  background-image: url('https://stonerthings.com/wp-content/uploads/2013/11/weed-in-a-jar.jpg');
  width: 20%;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-radius: ${props => props.theme.borderRadius};
 
`

const Title = styled.h3<IProps>`
  margin: 1em;  
  width: 100%; 
`

const Body = styled.p<IProps>`
  font-size: 12px;
  color: ${props => props.theme.palette.common.black};
`