import React, { useState } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/styles/breakpoints'
import LeftNav from './LeftNav'

const Burger: React.FC<BurgerProps> = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger >
      <LeftNav open={open} />
    </>
  )
}

interface BurgerProps {
  open?: boolean;
}

const StyledBurger = styled.div<BurgerProps>`
  width: 2rem;
  height: 2rem;
  display: none;
  flex: 1;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ open }) => open ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ open }) => open ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ open }) => open ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export default Burger