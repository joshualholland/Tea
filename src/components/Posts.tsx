import React from 'react'
import styled from 'styled-components'

const Posts: React.FC<IPosts> = ({ name, thc, cbd, body, user }) => (
  <Items>
    <UserBanner>
      <div>
        <Username>{user.username}</Username>
        <Time>August 6th, 2022 at 4:34pm</Time>
      </div>
      <ProfilePhoto></ProfilePhoto>
    </UserBanner>
    <StrainInfo>
      <TextWrapper>
        <StrainName>{name}</StrainName>
        <StrainData>
          <Percents>THC: {thc}%</Percents>
          <Percents>CBD: {cbd}%</Percents>
        </StrainData>
      </TextWrapper>
    </StrainInfo>
    <Bottom>
      <Body>
        {body.slice(0, 100)}
      </Body>
    </Bottom>
  </Items >
)

interface IPosts {
  name: string,
  thc: string,
  cbd: string,
  body: string,
  user: {
    username: string
  }
}

export default Posts

const Items = styled.div`
  display: flex;
  flex-flow: column;
  margin: 24px auto;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: ${props => props.theme.borderRadius};
  height: auto;
`

const UserBanner = styled.div`
  width: 100%;
  height: 40px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const Username = styled.p`
  font-family: ${props => props.theme.font.secondary};
  font-weight: 400;
  line-height: 1.2;
  margin-left: 1rem;
  margin-bottom: 0;
  color: ${props => props.theme.palette.tertiary.main};
`

const Time = styled.p`
  font-family: ${props => props.theme.font.primary};
  font-weight: 300;
  margin: .3rem 0 0 1rem;
  font-size: .7rem;
`

const ProfilePhoto = styled.div`
  height: 30px;
  width: 30px;
  border-radius: 50%;
  background-color: ${props => props.theme.palette.tertiary.main};
  border: 1px solid white;
  margin-right: 16px;
`

const StrainInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const TextWrapper = styled.div`
  margin-left: 1rem;
`

const StrainName = styled.p`
  font-size: 16px;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.secondary};
  margin-bottom: 0;
`

const StrainData = styled.div`
  display: flex;
  flex-direction: row;
`

const Percents = styled.p`
  font-size: 12px;
  font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.palette.tertiary.main};

  &:first-child {
    margin-right: 16px;
  }
`

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 0 16px;
`

const Body = styled.p`
  font-size: 12px;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.primary};
`