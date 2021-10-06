import React from 'react'
import styled from 'styled-components'
import { posts } from '../../utils/data/reviewposts'
import Posts from '../../components/Posts'

const Recents: React.FC = () => (
  <Wrapper>
    <List>
      <ListWrapper>
        {posts.map((post, index) => (
          <Posts
            title={post.title}
            strain={post.strain}
            body={post.body}
            photo={post.photo}
            user={post.user}
            key={index} />
        ))}
      </ListWrapper>
    </List>
  </Wrapper>
)

export default Recents

const Wrapper = styled.section`
  
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