import React from 'react'
import TopMenuGroup from './topMenuGroup'
import styled from 'styled-components'
import colors from '../styled/colors'
import { H1 } from '../styled/typography'

const MenuWrapper = styled.div`
  background: ${colors.primary};
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const H1Extend = styled(H1)`
  font-size: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`

export default function({ title}) {
  return (
    <div>
      <MenuWrapper>
        <TopMenuGroup />
        <H1Extend>{title}</H1Extend>
      </MenuWrapper>
    </div>
  )
}
