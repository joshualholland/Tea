import React from 'react'
import styled from 'styled-components'
import { breakpoints } from '../utils/styles/breakpoints'

const Nav: React.FC = () => {
  return (
    <Wrapper>

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

export default Nav

const Wrapper = styled.nav`
  width: 100%;
  height: 60px;
  box-shadow: 0 8px 6px -6px black;
`