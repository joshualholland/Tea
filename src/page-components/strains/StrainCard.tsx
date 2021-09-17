import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../../components/PrimaryButton'

const StrainCard: React.FC = () => (
  <Wrapper>
    <Card >
        <Photo />
        <PrimaryButton />
    </Card>
    <Card >
        <Photo />
        <PrimaryButton />
    </Card>
    <Card >
        <Photo />
        <PrimaryButton />
    </Card>
    <Card >
        <Photo />
        <PrimaryButton />
    </Card>
    <Card >
        <Photo />
        <PrimaryButton />
    </Card>
    <Card >
        <Photo />
        <PrimaryButton />
    </Card>
  </Wrapper>
)

interface IProps {
  variant?: VARIANT
}

enum VARIANT {
  PRIMARY,
  SECONDARY
}

export default StrainCard

const Wrapper = styled.section<IProps>`
  width: 100%;
  display: flex;
  max-width: 100vw;
  margin: 16px auto;
`

const Card = styled.div<IProps>`
  background: ${props => props.theme.palette.common.white};
  border: 1px solid ${props => props.theme.palette.tertiary.main};
  width: 100%;
  margin: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  height: 210px;
  border-radius: ${props => props.theme.borderRadius};
`

const Photo = styled.div<IProps>`
  background: ${props => props.theme.palette.tertiary.main};
  width: 100%;
  height: 145px;
  border-radius: 8px 8px 0px 0px;
`