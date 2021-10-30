import React from 'react'
import styled from 'styled-components'
import FollowIcon from '../../components/Icons/FollowIcon'
import ReviewLists from '../../page-components/reviews/ReviewList'

const UserInfo : React.FC = () => (
    <Wrapper>
        <Container>
            <FollowUser>
                <UserName>CannapiUser1234</UserName>
                <div>
                    <FollowIcon/>
                </div>
            </FollowUser>
            <UserFlair>Globetrotter</UserFlair>
            <HorizonalSection>
                <VertricalSection>
                    <FollowerCount>28</FollowerCount>
                    <Text>Strains</Text>
                </VertricalSection>
                <VertricalSection>
                    <UserReviewCount>134</UserReviewCount>
                    <Text>Reviews</Text>
                </VertricalSection>
            </HorizonalSection>
        </Container>
        <Stats></Stats>
    </Wrapper>
)

const Wrapper = styled.section `
  max-width: 343px;
  padding: 0 16px;
  margin: 111px auto 0;
`

const Container = styled.div `
  display: flex;
  flex-direction: column;
`

const FollowUser = styled.div `
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 auto;
`

const UserName = styled.h1 `
  font-family: ${props => props.theme.font.primary};
  font-size: 28px;
  color: ${props => props.theme.palette.tertiary.main};
  text-align: center;
  margin: 0;
  padding-right: 8px;
`

const UserFlair = styled.p `
  font-family: ${props => props.theme.font.primary};
  font-size: 16px;
  text-align: center;
  color: #5c5c5c;
`

const HorizonalSection = styled.div `
 display: flex;
 flex-direction: row;
 align-self: center;
 margin: 1em .5em;
`

const VertricalSection = styled.div `
  display: flex;
  flex-direction: column;
  margin: 1em;
  padding: .5em 2em;
  border: 2px solid #5c5c5c;
  border-radius: ${props => props.theme.borderRadius};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
`

const FollowerCount = styled.p `
  font-family: ${props => props.theme.font.primary};
  text-align: center;
  font-size: 18px;
  color: #5c5c5c;
  margin: 0px;
  font-weight: 700;
`

const UserReviewCount = styled.p `
  font-family: ${props => props.theme.font.primary};
  font-size: 18px;
  text-align: center;
  color: #5c5c5c;
  margin: 0px;
  font-weight: 700;
`

const Text = styled.p `
  font-family: ${props => props.theme.font.primary};
  text-align: center;
  font-size: 15spx;
  color: #5c5c5c;
  margin: 0px;
`

const Stats = styled.div `
  display: flex;
  flex-direction: row;
`

export default UserInfo