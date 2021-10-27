import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import StrainCard from './StrainCard'
import StrainSkeleton from './StrainSkeleton'
import { strains } from '../../utils/data/straindata'
import PrimaryButton from '../../components/Buttons/PrimaryButton'
import { breakpoints } from '../../utils/styles/breakpoints'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';

const StrainHeaderBox: React.FC<IPosts> = ({ name, type, effects, body, photo }) => (
  <Wrapper>
    <SwiperZ
      modules={[Pagination]}
      pagination={{ clickable: true }}
      spaceBetween={50}
      slidesPerView={1}
    >
      <SwiperSlide>
          <HeroBox>
            <Title>Hybrid Deals</Title>
            <StrainImage
                  src={photo}
                  width={300}
                  height={150}
            />
          </HeroBox>
        </SwiperSlide>
        <SwiperSlide>
          <HeroBoxTwo>
            <Title>Indica Dispensary</Title>
            <StrainImage
                  src={photo}
                  width={500}
                  height={250}
            />
          </HeroBoxTwo>
      </SwiperSlide>
    </SwiperZ>
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
const SwiperZ = styled(Swiper)`
  z-index: 0;
`

const StrainImage = styled(Image)`
  position: absolute;
  z-index: 0;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
`

const Title = styled.h3`
  margin: .5em 1em;  
  font-size: 25px;
  font-family: ${props => props.theme.font.primary};
  z-index: 0;
  color: ${props => props.theme.palette.common.white};
`

const HeroBox = styled.div`
  background:  linear-gradient(0deg, rgba(64,145,108,1) 0%, rgba(253,187,45,1) 100%);
  //border: 1px solid ${props => props.theme.palette.tertiary.main};
  width: 90%;
  margin: 10px 20px 20px 20px;
  padding: 5px 10px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  height: 280px;
  border-radius: ${props => props.theme.borderRadius};
`

const HeroBoxTwo = styled.div`
  background:  linear-gradient(0deg, rgba(64,145,108,1) 0%, rgba(150,107,157,1) 100%);
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