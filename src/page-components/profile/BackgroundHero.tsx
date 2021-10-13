import React from 'react'
import styled from 'styled-components'
import Image from 'next/image'

const BackgroundHero: React.FC = () => (
  <>
    <Hero />
    <ProfilePhoto />
  </>
)

interface IProps {
  variant?: VARIANT
}

enum VARIANT {
  PRIMARY,
  SECONDARY
}

export default BackgroundHero

const Hero = styled.div<IProps>`
  width: 100vw;
  height: 20rem;
  background-color: ${props => props.theme.palette.tertiary.main};
  position: relative;
  overflow: hidden;

  &:after {
    content: "";
    position: absolute;
    height: 80px;
    left: -10%;
    right: -10%;
    border-radius: 50%;
    bottom: -25px;
    background: #fff;
  }
`

const ProfilePhoto = styled.div`
  width: 80px;
  height: 80px;
  margin: -99px auto;
  background-color: ${props => props.theme.palette.primary.main};
  border-radius: 50%;
  position: relative;
`