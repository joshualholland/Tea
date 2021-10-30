import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import { posts } from '../../utils/data/reviewposts'

const UserCompactFeed: React.FC<IPosts> = ({ name, thc, cbd, body, user }) => (
    <Wrapper>
            {posts.map((post, index) => (
                <Card>
                    <HorizonalSection>
                        <VertricalSection>
                            <StrainName>
                                {post.name}
                            </StrainName>
                            <Text>
                                Indica
                            </Text>
                        </VertricalSection>
                        <VertricalSection>
                            <Percents>THC: {post.thc}%</Percents>
                            <Percents>CBD: {post.cbd}%</Percents>
                        </VertricalSection>
                        <VertricalSection>
                            <ReviewDate>
                                Oct 30th 21
                            </ReviewDate>
                            <HorizonalSection>
                                <ReviewRating>
                                    4.6/5
                                </ReviewRating>
                                <LeafWrapper>
                                    <Image src='/img/8bitleaf.png' 
                                    width={60}
                                    height={60}
                                    alt={'cannabis ratings'} />
                                </LeafWrapper>
                                
                            </HorizonalSection>
                        </VertricalSection>
                    </HorizonalSection>
                   
                </Card>
                ))}
            {/* <StrainImage
              src={photo}
              width={40}
              height={40}
            /> */}
    </Wrapper>
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

const Wrapper = styled.section `
  padding: 0 16px;
  width: 100%;
`

const Card = styled.div`
  background: ${props => props.theme.palette.common.white};
  //border: 1px solid ${props => props.theme.palette.tertiary.main};
  width: 85vw;
  margin: 1em 0em;
  padding: 5px 10px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  height: 95px;
  border-radius: ${props => props.theme.borderRadius};
`

const StrainName = styled.p`
  font-size: 20px;
  padding: .5em;
  margin: 0px;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.secondary};
`

const StrainType = styled.p`
  font-size: 16px;
  padding: 0em .5em;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.primary};
`

const Percents = styled.p`
  font-size: 12px;
  font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.palette.tertiary.main};
  padding: .2em;

  &:first-child {
    margin-right: 16px;
  }
`

const Container = styled.div `
  display: flex;
  flex-direction: column;
`


const HorizonalSection = styled.div `
 display: flex;
 flex-direction: row;
 justify-content: space-between;
`

const VertricalSection = styled.div `
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const LeafWrapper = styled.div`
    width: 40px;
    height: 40px;
    margin: 5px;
    filter: saturate(50%);
`


const ReviewDate = styled.p `
  font-family: ${props => props.theme.font.primary};
  font-size: 10px;
  text-align: right;
  color: #5c5c5c;
  margin: 4px;
`

const ReviewRating = styled.p `
  font-family: ${props => props.theme.font.primary};
  font-size: 1.5em;
  color: #5c5c5c;
  margin: 0px;
  padding: .5em;
`

const Text = styled.p `
  font-family: ${props => props.theme.font.primary};
  text-align: center;
  color: ${props => props.theme.palette.common.white};
  margin: 0px 10px;
  padding: .1em;
  width: 100px;
  background-color: ${props => props.theme.palette.tertiary.main};
  border-radius: ${props => props.theme.borderRadius};
`

const Stats = styled.div `
  display: flex;
  flex-direction: row;
`

export default UserCompactFeed