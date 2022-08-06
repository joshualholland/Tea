import React from 'react'
import styled from 'styled-components'

export const LoginForm: React.FC = () => (
  <Container>
    <FormWrapper>
      <form>
        <FormInput placeholder='Username'></FormInput>
        <FormInput placeholder='Password'></FormInput>
      </form>
    </FormWrapper>
  </Container>
)

const Container = styled.div`
  padding: 0 1.5rem;
  margin-top: 2.5rem;
  display: flex;
`

const FormWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`

const FormInput = styled.input`
  border-radius: 8px;
  width: 100%;
  height: 48px;
  font-family: ${props => props.theme.font.secondary};
`