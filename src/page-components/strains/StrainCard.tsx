import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'
import Link from 'next/link'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import { strains } from '../../utils/data/straindata'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const StrainCard: React.FC<IPosts> = ({ name, type, effects, body, photo }) => (

  <SwiperZ spaceBetween={64} slidesPerView={2.4}>
    {strains && strains.map((strain, index) => (
      <SwiperSlide key="index">
        <StrainLink href='/'>
          <Card>      
            <StrainName>
              {name}
            </StrainName>
            <StrainType>
              {type}
            </StrainType>
            <HorizonalSection>
              <StrainEffectsOne>
                {effects.effectOne}
              </StrainEffectsOne>
              <StrainEffectsTwo>
                {effects.effectTwo}
              </StrainEffectsTwo>
            </HorizonalSection>
            {/* <StrainImage
              src={photo}
              width={40}
              height={40}
            /> */}
          </Card>
        </StrainLink>
      </SwiperSlide>
    ))}
  </SwiperZ>
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

export default StrainCard

const HorizonalSection = styled.div`
 display: flex;
 flex-direction: row;
`

const SwiperZ = styled(Swiper)`
  z-index: 0;
`

const Card = styled.div`
  background: ${props => props.theme.palette.common.white};
  //border: 1px solid ${props => props.theme.palette.tertiary.main};
  width: 225px;
  margin: 10px 20px 20px 20px;
  padding: 5px 10px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  height: 175px;
  border-radius: ${props => props.theme.borderRadius};
`
const StrainImage = styled(Image)`
  height: 50px;
  margin-left: 20px;
  position: relative;
`

const StrainLink = styled(Link)`
  cursor: pointer;
`

const StrainInfo = styled.div`
  width: 100%;
  height: 145px;
`

const Title = styled.h2`
  font-size: 18px;
  font-family: ${props => props.theme.font.primary};
  margin: 20px;
`

const StrainName = styled.p`
  font-size: 22px;
  padding: 0em .5em;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.secondary};
`

const StrainType = styled.p`
  font-size: 16px;
  padding: 0em .5em;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.primary};
`

const StrainEffectsOne = styled.p`
  font-size: 16px;
  margin: .5em;
  padding: .2em;
  text-align: center;
  width: 100%;
  background-color: #40916C;
  color: ${props => props.theme.palette.common.white};
  font-family: ${props => props.theme.font.primary};
  border-radius: ${props => props.theme.borderRadius};
`

const StrainEffectsTwo = styled.p`
  font-size: 16px;
  margin: .5em;
  padding: .2em;
  text-align: center;
  background-color: ${props => props.theme.palette.tertiary.main};
  width: 100%;
  color: ${props => props.theme.palette.common.white};
  font-family: ${props => props.theme.font.primary};
  border-radius: ${props => props.theme.borderRadius};
`