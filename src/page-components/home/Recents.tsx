import React from 'react'
import styled from 'styled-components'
import { posts } from '../../utils/data/reviewposts'
import Posts from '../../components/Posts'

const Recents: React.FC = () => (
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
)

export default Recents

const List = styled.div`
  max-width: 343px;
  margin: 0 auto;
`