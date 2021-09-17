import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../utils/styles/breakpoints'

const PrimaryButton: React.FC = () => {
  return (
    <Wrapper>
         <Button>
             Im a button
        </Button>
    </Wrapper>
  )
}

enum VARIANT {
  PRIMARY,
  SECONDARY
}

interface IProps {
  variant?: VARIANT
}

export default PrimaryButton

const Wrapper = styled.div`

`


const Button = styled.button`
  font-size: 1em;
  margin: .5em;
  padding: .5em;
  border-radius:  ${props => props.theme.borderRadius};
`