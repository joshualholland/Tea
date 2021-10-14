import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import StrainCard from './StrainCard'
import {strains} from '../../utils/data/straindata'
import PrimaryButton from '../../components/PrimaryButton'
import {breakpoints} from '../../utils/styles/breakpoints'
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';

const StrainDisplay : React.FC = () => (
   
        <ListWrapper>
            {strains && strains.map((strain, index) => (
            <StrainCard
                name={strain.name}
                type={strain.type}
                body={strain.body}
                photo={strain.photo}
                effects={strain.effects}
                key={index}/>))}
        </ListWrapper>
  
)

interface IProps {
    variant?: VARIANT
}

enum VARIANT {
    PRIMARY,
    SECONDARY
}

export default StrainDisplay

const Wrapper = styled.section < IProps > `
  width: 100%;
  max-width: 100vw;
  margin: 16px auto;
  border-radius: ${props => props.theme.borderRadius};

  @media ${breakpoints.tablet} {
      margin: 16px auto;
      max-width: 70vw;
    }
`

const ListWrapper = styled.div < IProps > `
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  margin-top: 1em;  
  margin-bottom: 1em;  
  background: ${props => props.theme.palette.common.white};
  height: 400px;
  border-radius: ${props => props.theme.borderRadius};
`

const Title = styled.h3 < IProps > `
  margin: .5em 1em;  
  font-size: 20px;
  font-family: ${props => props.theme.font.primary};
  display: block;
`

const Body = styled.p < IProps > `
  font-size: 12px;
  color: ${props => props.theme.palette.common.black};
`