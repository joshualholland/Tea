import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import StrainCard from './StrainCard'
import StrainHeaderBox from './StrainHeaderBox'
import StrainSkeleton from './StrainSkeleton'
import { strains } from '../../utils/data/straindata'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import { breakpoints } from '../../utils/styles/breakpoints'
import 'swiper/css';

const StrainDisplay: React.FC<IPosts> = ({ name, type, effects, body, photo, ailment }) => (
  <ListWrapper>
    <StrainHeaderBox 
    type={strains[1].type}
    name={strains[1].name}
    body={strains[1].body}
    photo={strains[1].photo}
    effects={strains[0].effects}
    />
    <FilterWrapper>
      <FilterTitle>Hybrid</FilterTitle>
      <FilterTitle>Indica</FilterTitle>
      <FilterTitle>Sativa</FilterTitle>
    </FilterWrapper>
    {strains && strains.map((strain, index) => (
      <StackedSection>
        <RowTitle>{strain.ailment}</RowTitle>
        <StrainCard
          name={strain.name}
          type={strain.type}
          body={strain.body}
          photo={strain.photo}
          effects={strain.effects}
          key={strain.name} />
        </StackedSection>
        ))}
    <StrainSkeleton />
  </ListWrapper>
)

interface IPosts {
  name: string,
  type: string,
  effects: {
    effectOne: string,
    effectTwo: string
  },
  body: string,
  photo: string,
  ailment: string
}

enum VARIANT {
  PRIMARY,
  SECONDARY
}

export default StrainDisplay

const Wrapper = styled.section`
  width: 100%;
  max-width: 100vw;
  margin: 16px auto;
  border-radius: ${props => props.theme.borderRadius};

  @media ${breakpoints.tablet} {
      margin: 16px auto;
      max-width: 70vw;
    }
`

const ListWrapper = styled.div`
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  margin-top: 1em;  
  margin-bottom: 1em;  
  background: ${props => props.theme.palette.common.white};
  height: 400px;
  z-index: 1;
  border-radius: ${props => props.theme.borderRadius};
`

const FilterWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`  

const FilterTitle = styled.h3`
  margin: 1em 1em;  
  font-size: 20px;
  padding: .25em 1.2em;
  color: ${props => props.theme.palette.common.white};
  border-radius: ${props => props.theme.borderRadius};
  background-color: ${props => props.theme.palette.secondary.main};
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  font-family: ${props => props.theme.font.primary};

  :nth-child(2) {
    background-color: ${props => props.theme.palette.tertiary.main};
  }

  :nth-child(3) {
    background-color: ${props => props.theme.palette.primary.main};
  }  

`
const StackedSection = styled.div`

`

const RowTitle = styled.h3`
  padding: .25em 1.2em;
  color: ${props => props.theme.palette.common.black};
  margin: 1em 1em;  
  font-size: 20px;
  font-family: ${props => props.theme.font.primary};
`