import React from 'react'
import styled from 'styled-components'
import PrimaryButton from '../../components/PrimaryButton'
import { strains } from '../../utils/data/straindata'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';


const StrainCard: React.FC = () => (

  <Swiper spaceBetween={64} slidesPerView={3}>
    {strains && strains.map((strain, index) => (
      <SwiperSlide key="strain">
        <Card>
          <StrainName>
            {strain.name}
          </StrainName>
          <StrainType>
            {strain.type}
          </StrainType>
          <StrainEffectsOne>
            {strain.effects[0]}
          </StrainEffectsOne>
          <StrainEffectsTwo>
            {strain.effects[1]}
          </StrainEffectsTwo>
        </Card>
      </SwiperSlide>
    ))}
  </Swiper>
)

interface IProps {
  variant?: VARIANT
}

enum VARIANT {
  PRIMARY,
  SECONDARY
}

export default StrainCard

const Wrapper = styled.section < IProps > `
  width: 100%;
  display: flex;
  height: auto;
  max-width: 100vw;
  margin: 16px auto;
`

const Card = styled.div < IProps > `
  background: ${props => props.theme.palette.common.white};
  //border: 1px solid ${props => props.theme.palette.tertiary.main};
  width: 175px;
  margin: 10px 20px 20px 20px;
  padding: 10px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  height: 240px;
  border-radius: ${props => props.theme.borderRadius};
`

const StrainInfo = styled.div < IProps > `
  width: 100%;
  height: 145px;
`

const Title = styled.div < IProps > `
  font-size: 36px;
  font-family: ${props => props.theme.font.primary};
  margin: 5px;
`

const StrainName = styled.p < IProps > `
  font-size: 22px;
  padding: .2em .5em;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.secondary};
`

const StrainType = styled.p < IProps > `
  font-size: 16px;
  padding: .2em .5em;
  color: ${props => props.theme.palette.common.black};
  font-family: ${props => props.theme.font.primary};
`

const StrainEffectsOne = styled.p < IProps > `
  font-size: 16px;
  margin: .5em;
  padding: .2em .5em;
  background-color: #40916C;
  width: 60%;
  color: ${props => props.theme.palette.common.white};
  font-family: ${props => props.theme.font.primary};
  border-radius: ${props => props.theme.borderRadius};
`

const StrainEffectsTwo = styled.p < IProps > `
  font-size: 16px;
  margin: .5em;
  padding: .2em .5em;
  background-color: ${props => props.theme.palette.tertiary.main};
  width: 60%;
  color: ${props => props.theme.palette.common.white};
  font-family: ${props => props.theme.font.primary};
  border-radius: ${props => props.theme.borderRadius};
`