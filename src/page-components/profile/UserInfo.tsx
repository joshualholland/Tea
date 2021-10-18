import React from 'react'
import styled from 'styled-components'
import FollowIcon from '../../components/Icons/FollowIcon'

const UserInfo: React.FC = () => (
  <Wrapper>
    <Container>
      <FollowUser>
        <UserName>CannapiUser1234</UserName>
        <div>
          <FollowIcon />
        </div>
      </FollowUser>
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

const Stats = styled.div`
  display: flex;
  flex-direction: row;
`

export default UserInfo