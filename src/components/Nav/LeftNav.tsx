import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'

const LeftNav: React.FC = () => (
  <List>
    <Items href='/'>Home</Items>
    <Items href='/strains'>Strains</Items>
    <Items href='/'>Notifications</Items>
  </List>
)

const List = styled.div`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: ${props => props.theme.palette.secondary.main};
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 200px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
  }
`

const Items = styled.a`
  margin-left: 24px;
  font-family: ${props => props.theme.font.primary};
  text-decoration: none;
  color: #000000;
  padding: 18px 10px;
`

export default LeftNav