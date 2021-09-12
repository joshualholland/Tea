import React, { ReactNode } from 'react'
import Nav from './Nav'

type Props = {
  children?: ReactNode
}

const Layout = ({ children }: Props) => (
  <>
    <Nav />
    {children}
  </>
)

export default Layout