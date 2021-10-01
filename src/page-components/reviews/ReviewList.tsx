import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { posts } from '../../utils/data/reviewposts'
import Posts from '../../components/Posts'

const ReviewLists: React.FC = () => (
  <Wrapper>
    <ListWrapper>
      <List>
        <Posts props={posts} />
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
  padding: 1em 3em; 
  list-style: none;
`

const Items = styled.li<IProps>`
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

const Title = styled.h3<IProps>`
  font-size: 30px;
  font-family: ${props => props.theme.font.primary};
  margin: 5px;
`

const StrainName = styled.p<IProps>`
  font-size: 16px;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.secondary};
`


const Body = styled.p<IProps>`
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