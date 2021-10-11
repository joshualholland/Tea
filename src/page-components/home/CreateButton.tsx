import React from 'react'
import styled from 'styled-components'

const CreateButton: React.FC = () => (
  <Wrapper>
    <Container>
      <Button></Button>
      <Text>Start a review</Text>
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
  background-color: ${props => props.theme.palette.primary.main};
  border-radius: ${props => props.theme.borderRadius};
  display: flex;
  align-items: center;
`

const Text = styled.h1`
  font-size: 16px;
  font-family: ${props => props.theme.font.primary};
  color: white;
`

const Button = styled.div`
  
`