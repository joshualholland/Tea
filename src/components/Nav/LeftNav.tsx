import React from 'react'
import styled from 'styled-components'

const LeftNav: React.FC<LeftProps> = ({ open }) => (
  <List open={open}>
    <Items>Home</Items>
    <Items>Strains</Items>
    <Items>Notifications</Items>
  </List>
)

interface LeftProps {
  open: boolean
}

const List = styled.ul<LeftProps>`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${props => props.theme.palette.tertiary.main};
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`

const Items = styled.li`
  margin-left: 24px;
  font-family: ${props => props.theme.font.primary};
  text-decoration: none;
  color: #000000;
  padding: 18px 10px;
`

export default LeftNav