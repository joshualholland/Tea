import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../../components/PrimaryButton'
import { strains } from '../../utils/data/straindata'


const StrainCard: React.FC = () => (
  <Wrapper>
    {strains && strains.map((strain, index) => (
          <Card key="index">
          <StrainInfo>
            <StrainName>
              {strain.name}
            </StrainName> 
            <StrainType>
              {strain.type}
            </StrainType>
            <StrainEffects>
              {strain.effects[0]}
            </StrainEffects>
            <StrainEffects>
              {strain.effects[1]}
            </StrainEffects>
          </StrainInfo>
      </Card>
        ))}
   
   
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
  width: 15%;
  margin: 10px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  height: 210px;
  border-radius: ${props => props.theme.borderRadius};
`

const StrainInfo = styled.div<IProps>`
  width: 100%;
  height: 145px;
`


const Title = styled.h3<IProps>`
  font-size: 30px;
  font-family: ${props => props.theme.font.primary};
  margin: 5px;
`

const StrainName = styled.p<IProps>`
  font-size: 18px;
  padding: .2em .5em;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.secondary};
`

const StrainType = styled.p<IProps>`
  font-size: 16px;
  padding: .2em .5em;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.primary};
`

const StrainEffects = styled.p<IProps>`
  font-size: 16px;
  margin: .5em;
  padding: .2em .5em;
  border: 2px solid #40916C;
  width: 60%;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.primary};
  border-radius: ${props => props.theme.borderRadius};
`