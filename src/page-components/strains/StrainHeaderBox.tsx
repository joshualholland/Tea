import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import StrainCard from './StrainCard'
import StrainSkeleton from './StrainSkeleton'
import { strains } from '../../utils/data/straindata'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import { breakpoints } from '../../utils/styles/breakpoints'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const StrainHeaderBox: React.FC<IPosts> = ({ name, type, effects, body, photo }) => (
  <Wrapper>
    <HeroBox>
        <Title>Local Oregon Dispensary</Title>
        <StrainImage
              src={photo}
              width={500}
              height={250}
        />
    </HeroBox>
  </Wrapper>
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

export default StrainHeaderBox

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

const StrainImage = styled(Image)`
  position: absolute;
  z-index: 0;
`

const Title = styled.h3`
  margin: .5em 1em;  
  font-size: 25px;
  font-family: ${props => props.theme.font.primary};
  display: flex;
  position: absolute;
  z-index: 0;
  color: ${props => props.theme.palette.common.white};
`

const HeroBox = styled.div`
  background-color: ${props => props.theme.palette.tertiary.main};
  //border: 1px solid ${props => props.theme.palette.tertiary.main};
  width: 90%;
  margin: 10px 20px 20px 20px;
  padding: 5px 10px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  height: 280px;
  border-radius: ${props => props.theme.borderRadius};
`

const Body = styled.p`
  font-size: 12px;
  color: ${props => props.theme.palette.common.black};
`