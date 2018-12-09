import React from 'react'
import TopMenuGroup from './topMenuGroup'
import styled from 'styled-components'
import colors from '../styled/colors'
import { H1 } from '../styled/typography'
import Nav from './nav'

const MenuWrapper = styled.div`
  background: ${colors.primary};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 1024px) {
    justify-content: flex-start;
  }
`

const H1Extend = styled(H1)`
  font-size: 17px;
  margin-top: 24px;
  margin-bottom: 20px;

  @media (min-width: 1024px) {
    display: none;
  }
`

const NavExtend = styled(Nav)`
  position: relative;
  top: 0;
  padding: 16px;
  left: 0;
  float: left;
  margin: 0 auto;
  min-width: 1024px;
  display: none;

  @media (min-width: 1024px) {
    display: block;
    text-align: left;
    max-width: 1024px;
  }
`

export default function({ title, location }) {
  return (
    <MenuWrapper>
      <TopMenuGroup />
      <NavExtend location={location} showLogo />
      <H1Extend>{title}</H1Extend>
    </MenuWrapper>
  )
}
