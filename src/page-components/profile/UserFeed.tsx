import React from 'react'
import styled from 'styled-components'
import UserCompactFeed from './UserCompactFeed'

const UserFeed: React.FC = () => (
  <Wrapper>
     <UserCompactFeed />
  </Wrapper>
)

const Wrapper = styled.section`
  padding: 0 16px;
  width: 100%;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const FollowUser = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`

const UserName = styled.h1`
  font-family: ${props => props.theme.font.primary};
  font-size: 28px;
  color: ${props => props.theme.palette.tertiary.main};
  text-align: center;
  margin: 0;
  padding-right: 8px;
`

const UserFlair = styled.p`
  font-family: ${props => props.theme.font.primary};
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
`


const HorizonalSection = styled.div`
 display: flex;
 flex-direction: row;
 align-self: center;
`

const VertricalSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding: .5em 2em;
  border: 2px solid #5c5c5c;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

const FollowerCount = styled.p`
  font-family: ${props => props.theme.font.primary};
  text-align: center;
  font-size: 18px;
  color: #5c5c5c;
  margin: 0px;
  font-weight: 700;
`

const UserReviewCount = styled.p`
  font-family: ${props => props.theme.font.primary};
  font-size: 18px;
  text-align: center;
  color: #5c5c5c;
  margin: 0px;
  font-weight: 700;
`

const Text = styled.p`
  font-family: ${props => props.theme.font.primary};
  text-align: center;
  color: #5c5c5c;
  margin: 0px;
`


const Stats = styled.div`
  display: flex;
  flex-direction: row;
`

export default UserFeed