import React from 'react'
import styled from 'styled-components'

const BackgroundHero: React.FC = () => (
  <Wrapper>
    <Photo />
  </Wrapper>
)

interface IProps {
  variant?: VARIANT
}

enum VARIANT {
  PRIMARY,
  SECONDARY
}

export default BackgroundHero

const Wrapper = styled.section<IProps>`
  width: 100%;
  max-width: 70vw;
  margin: 16px auto;
`

const Photo = styled.div<IProps>`
  background: ${props => props.theme.palette.secondary.main};
  width: 100%;
  height: 400px;
  border-radius: ${props => props.theme.borderRadius};
`