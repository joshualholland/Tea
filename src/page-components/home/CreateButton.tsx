import React from 'react'
import styled from 'styled-components'

const CreateButton: React.FC = () => (
  <Wrapper>
    <Container>
      <Text>Start a review</Text>
      <Button>
      </Button>
    </Container>
  </Wrapper>
)

export default CreateButton

const Wrapper = styled.div`
  max-width: 343px;
  padding: 0 16px;
  margin: 0 auto;
`

const Container = styled.div`
  height: 40px;
  border-bottom: 2px solid;
  border-color: ${props => props.theme.palette.primary.main};
  display: flex;
  align-items: center;
`

const Text = styled.h1`
  font-size: 16px;
  font-family: ${props => props.theme.font.primary};
  color: ${props => props.theme.palette.primary.main};
`

const Button = styled.div`
  height: 18px;
  margin-left: 55%;
  width: 18px;
  background-color: ${props => props.theme.palette.primary.main};
  border-radius: 60%;
  
`