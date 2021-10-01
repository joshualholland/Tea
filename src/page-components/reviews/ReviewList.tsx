import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { posts } from '../../utils/data/reviewposts'
import Posts from '../../components/Posts'

const ReviewLists: React.FC = () => (
  <Wrapper>
    <ListWrapper>
      <List>
        {posts.map((post, index) => (
          <Posts
            title={post.title}
            strain={post.strain}
            body={post.body}
            photo={post.photo}
            user={post.user}
            key={index} />
        ))}
      </List>
    </ListWrapper>
  </Wrapper>
)

export default ReviewLists

const Wrapper = styled.section`
  width: 100%;
  max-width: 70vw;
  margin: 16px auto;
  border-radius: ${props => props.theme.borderRadius};
`

const ListWrapper = styled.div`
  width: 80%;
  margin-top: 1.5em;  
  margin-bottom: 1.5em;  
`

const List = styled.ul`
  max-width: 1080px;
  margin: 0 auto; 
  padding: 1em 3em; 
  list-style: none;
`