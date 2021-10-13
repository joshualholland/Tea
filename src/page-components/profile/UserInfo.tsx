import React from 'react'
import styled from 'styled-components'

const UserInfo: React.FC = () => (
  <Wrapper>
    <Container>
      <UserName>CannapiUser1234</UserName>
      <UserFlair>Globetrotter</UserFlair>
    </Container>
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

const Stats = styled.div`
  display: flex;
  flex-direction: row;
`

export default UserInfo