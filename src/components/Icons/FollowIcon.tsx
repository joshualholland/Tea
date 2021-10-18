import React from 'react'
import styled from 'styled-components'

const FollowIcon: React.FC = () => (
  <Checkmark>
    <CheckmarkCircle />
    <CheckmarkStem />
    <CheckmarkKick />
  </Checkmark>
)

const Checkmark = styled.span`
  display:inline-block;
  width: 22px;
  height:22px;
  -ms-transform: rotate(45deg); /* IE 9 */
  -webkit-transform: rotate(45deg); /* Chrome, Safari, Opera */
  transform: rotate(45deg);
  cursor: pointer;
`

const CheckmarkCircle = styled.div`
  position: absolute;
  width:22px;
  height:22px;
  background-color: ${props => props.theme.palette.primary.main};
  border-radius:11px;
  left:0;
  top:0;
`

const CheckmarkStem = styled.div`
  position: absolute;
  width:2px;
  height:9px;
  background-color:#fff;
  left:11px;
  top:6px;
`

const CheckmarkKick = styled.div`
  position: absolute;
  width:3px;
  height:3px;
  background-color:#fff;
  left:8px;
  top:12px;
`

export default FollowIcon