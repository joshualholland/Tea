import React from 'react'
import styled from 'styled-components'

export const ProfileSection = () => (
  <Wrapper>
    <Container>
      <Info>
        <Photo></Photo>
        <Name>Joshua Holland</Name>
      </Info>
      <Stats>
        <Item>
          <Title>Following</Title>
          <Number>19</Number>
        </Item>
        <Item>
          <Title>Followers</Title>
          <Number>21</Number>
        </Item>
        <Item>
          <Title>Strains</Title>
          <Number>420</Number>
        </Item>
      </Stats>
    </Container>
  </Wrapper>
)

const Wrapper = styled.section`
  max-width: 33%;
  height: 100%;
  padding: 1rem .5rem;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border-radius: ${props => props.theme.borderRadius};
  margin-top: 24px;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Info = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;
  margin: 0 0 1rem 1rem;
`

const Photo = styled.div`
  border-radius: 50%;
  background-color: ${props => props.theme.palette.tertiary.main};
  height: 3.75rem;
  width: 3.75rem;
`

const Name = styled.h1`
  font-family: ${props => props.theme.font.secondary};
  color: ${props => props.theme.palette.tertiary.main};
  margin: 0;
  align-self: center;
`

const Stats = styled.div`
  display: flex;
  flex-direction: row;
`

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 1rem;
`

const Title = styled.p`
  font-size: 1rem;
  font-family: ${props => props.theme.font.primary};
  margin: 0;
`

const Number = styled.p`
  font-size: .5rem;
  font-weight: 300;
  font-family: ${props => props.theme.font.primary};
  margin: 0;
`