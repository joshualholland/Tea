import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { breakpoints } from '../../utils/styles/breakpoints'
import LeftNav from './LeftNav'

const Burger: React.FC<BurgerProps> = () => {
  const [showLeftNav, setShowLeftNav] = useState(false)
  const leftNav = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!showLeftNav) return;
    function handleClick(event: any) {
      if (leftNav.current && !leftNav.current.contains(event.target)) {
        setShowLeftNav(false)
      }
    }

    window.addEventListener("click", handleClick)
    return () => window.removeEventListener("click", handleClick);
  }, [showLeftNav])

  return (
    <>
      <StyledBurger showLeftNav={showLeftNav} onClick={() => setShowLeftNav(!showLeftNav)}>
        <div />
        <div />
        <div />
      </StyledBurger >
      {showLeftNav &&
        <div ref={leftNav}>
          <LeftNav />
        </div>
      }

    </>
  )
}

interface BurgerProps {
  showLeftNav?: boolean;
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
    background-color: ${({ showLeftNav }) => showLeftNav ? '#ccc' : '#333'};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ showLeftNav }) => showLeftNav ? 'rotate(45deg)' : 'rotate(0)'};
    }
    &:nth-child(2) {
      transform: ${({ showLeftNav }) => showLeftNav ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ showLeftNav }) => showLeftNav ? 0 : 1};
    }
    &:nth-child(3) {
      transform: ${({ showLeftNav }) => showLeftNav ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`

export default Burger