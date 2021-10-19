import React from 'react'
import styled, { keyframes } from 'styled-components'
import Image from 'next/image'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import { strains } from '../../utils/data/straindata'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const StrainSkeleton: React.FC = () => (
  <Wrapper>
    <Card>
      <StrainName />
      <StrainImage />
      <StrainType />
      <StrainEffectsOne />
      <StrainEffectsTwo />
    </Card>
    <Card>
      <StrainName />
      <StrainImage />
      <StrainType />
      <StrainEffectsOne />
      <StrainEffectsTwo />
    </Card>
  </Wrapper>
)


enum VARIANT {
  PRIMARY,
  SECONDARY
}

export default StrainSkeleton

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  height: auto;
  max-width: 100vw;
  margin: 16px auto;
`

const backgroundSkeleton = keyframes`
    0%{background-position:0% 50%}
    50%{background-position:100% 50%}
    100%{background-position:0% 50%
`

const SwiperZ = styled(Swiper)`
  z-index: 0;
`

const Card = styled.div`
  background: ${props => props.theme.palette.common.white};
  //border: 1px solid ${props => props.theme.palette.tertiary.main};
  width: 175px;
  margin: 10px 20px 20px 20px;
  padding: 5px 10px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  height: 240px;
  border-radius: ${props => props.theme.borderRadius};
`
const StrainImage = styled.div`
  height: 25px;
  width: 25px;
  padding: 10px;
  position: relative;
  animation: ${backgroundSkeleton} 3s ease infinite;
  background: linear-gradient(270deg, #e6e6e6, #bbbbbb, #40916C);
  border-radius: 50%;
  background-size: 600% 600%;
`

const StrainInfo = styled.div`
  width: 100%;
  height: 145px;
`


const StrainName = styled.p`
  font-size: 22px;
  padding: 0em .5em;
  width: 150px;
  height: 30px;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.secondary};
  animation: ${backgroundSkeleton} 3s ease infinite;
  background: linear-gradient(270deg, #e6e6e6, #bbbbbb, #40916C);
  border-radius: ${props => props.theme.borderRadius};
  background-size: 600% 600%; 
`

const StrainType = styled.p`
  font-size: 16px;
  padding: 0em .5em;
  width: 150px;
  height: 20px;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.primary};
  animation: ${backgroundSkeleton} 3s ease infinite;
  background: linear-gradient(270deg, #e6e6e6, #bbbbbb, #40916C);
  border-radius: ${props => props.theme.borderRadius};
  background-size: 600% 600%; 
`

const StrainEffectsOne = styled.p`
  font-size: 16px;
  margin: 1em .5em;
  padding: .2em .5em;
  width: 60%;
  height: 10px;
  color: ${props => props.theme.palette.common.white};
  font-family: ${props => props.theme.font.primary};
  border-radius: ${props => props.theme.borderRadius};
  animation: ${backgroundSkeleton} 3s ease infinite;
  background: linear-gradient(270deg, #e6e6e6, #bbbbbb, #40916C);
  border-radius: ${props => props.theme.borderRadius};
  background-size: 600% 600%; 
`

const StrainEffectsTwo = styled.p`
  font-size: 16px;
  margin: .5em;
  padding: .2em .5em;
  width: 60%;
  height: 10px;
  color: ${props => props.theme.palette.common.white};
  font-family: ${props => props.theme.font.primary};
  border-radius: ${props => props.theme.borderRadius};
  animation: ${backgroundSkeleton} 3s ease infinite;
  background: linear-gradient(270deg, #e6e6e6, #bbbbbb, #40916C);
  border-radius: ${props => props.theme.borderRadius};
  background-size: 600% 600%; 
`