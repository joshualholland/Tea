import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../utils/styles/breakpoints'

const PrimaryButton: React.FC = () => {
  return (
    <Wrapper>
         <Button>
            Full Review
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


const Button = styled.button<IProps>`
  font-size: 1.2em;
  font-family: ${props => props.theme.font.primary};
  margin: 3em .5em 0em 2em;
  cursor: pointer;
  padding: .8em 1em;
  background-color:${props =>  props.theme.palette.secondary.main};
  color: #fff;
  //box-shadow: 0 4px 15px 0 rgba(23, 168, 108, 0.75);
  border: none;
  border-radius:  ${props => props.theme.borderRadius};
`