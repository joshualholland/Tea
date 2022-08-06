import React from 'react'
import styled from 'styled-components'
import { posts } from '../../utils/data/reviewposts'
import Posts from '../../components/Posts'
import { breakpoints } from '../../utils/styles/breakpoints'

const Recents: React.FC = () => (
  <List>
    {posts.map((post, index) => (
      <Posts
        name={post.name}
        thc={post.thc}
        cbd={post.cbd}
        body={post.body}
        user={post.user}
        key={index} />
    ))}
  </List>
)

export default Recents

const List = styled.div`
  max-width: 343px;
  margin: 0 auto;

  @media ${breakpoints.laptop} {
    max-width: 31.25rem;
    margin: 0 0 0 1rem;
  }
`