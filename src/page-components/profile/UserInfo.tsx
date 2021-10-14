import React from 'react'
import styled from 'styled-components'

const UserInfo: React.FC = () => (
  <Wrapper>
    <Container>
      <UserName>CannapiUser1234</UserName>
      <UserFlair>Globetrotter</UserFlair>
    </Container>
    <Buttons>
      <FollowButton>Follow</FollowButton>
    </Buttons>
    <Stats>
    </Stats>
  </Wrapper>
)

const Wrapper = styled.section`
  max-width: 343px;
  padding: 0 16px;
  margin: 111px auto 0;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const UserName = styled.h1`
  font-family: ${props => props.theme.font.primary};
  font-size: 28px;
  color: ${props => props.theme.palette.tertiary.main};
  text-align: center;
  margin: 0;
`

const UserFlair = styled.p`
  font-family: ${props => props.theme.font.primary};
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
`

const Buttons = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0 auto;
`

const FollowButton = styled.button`
  max-width: 200px;
  padding: 8px 24px;
  color: ${props => props.theme.palette.common.white};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.palette.tertiary.main};
  border: 2px solid ${props => props.theme.palette.tertiary.main};
`

const Stats = styled.div`
  display: flex;
  flex-direction: row;
`

export default UserInfo