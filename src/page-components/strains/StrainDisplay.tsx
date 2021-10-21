import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import StrainCard from './StrainCard'
import StrainHeaderBox from './StrainHeaderBox'
import StrainSkeleton from './StrainSkeleton'
import { strains } from '../../utils/data/straindata'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import { breakpoints } from '../../utils/styles/breakpoints'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const StrainDisplay: React.FC<IPosts> = ({ name, type, effects, body, photo }) => (
  <ListWrapper>
    <StrainHeaderBox 
    type={strains[0].type}
    name={strains[0].name}
    body={strains[0].body}
    photo={strains[0].photo}
    effects={strains[0].effects}
    />
    <FilterWrapper>
      <FilterTitle>Hybrid</FilterTitle>
      <FilterTitle>Indica</FilterTitle>
      <FilterTitle>Sativa</FilterTitle>
    </FilterWrapper>
    {strains && strains.map((strain, index) => (
      <StrainCard
        name={strain.name}
        type={strain.type}
        body={strain.body}
        photo={strain.photo}
        effects={strain.effects}
        key={strain.name} />
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

const Body = styled.p`
  font-size: 12px;
  color: ${props => props.theme.palette.common.black};
`