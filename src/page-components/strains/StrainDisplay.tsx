import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import StrainCard from './/StrainCard.tsx'
import PrimaryButton from '../../components/PrimaryButton'

const StrainDisplay: React.FC = () => (
  <Wrapper>
    <ListWrapper>
      <List>
        <StrainCard  />
      </List>
    </ListWrapper>
  </Wrapper>
)

interface IProps {
  variant?: VARIANT
}

enum VARIANT {
  PRIMARY,
  SECONDARY
}

export default StrainDisplay

const Wrapper = styled.section<IProps>`
  width: 100%;
  max-width: 70vw;
  margin: 16px auto;
  border-radius: ${props => props.theme.borderRadius};
`

const ListWrapper = styled.div<IProps>`
  //box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  width: 100%;
  margin-top: 1em;  
  margin-bottom: 1em;  
  background: ${props => props.theme.palette.common.white};
  height: auto;
  border-radius: ${props => props.theme.borderRadius};
`

const List = styled.ul<IProps>`
  margin: 1em; 
  padding: 2em 1em; 
  list-style: none;
`

const Items = styled.li<IProps>`
  display: flex;
  flex-flow:row;
  margin: 1em;
  padding: 1.2em;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  border-radius: ${props => props.theme.borderRadius};
  background: ${props => props.theme.palette.common.white};   
  color: ${props => props.theme.palette.tertiary.main};
 
`

const Title = styled.h3<IProps>`
  margin: 1em;  
  width: 90%; 
  display: block;
`

const Body = styled.p<IProps>`
  font-size: 12px;
  color: ${props => props.theme.palette.common.black};
`