import React from 'react'
import styled from 'styled-components'
import colors from '../styled/colors'
import logo from '../images/logo.svg'

const Root = styled.div`
  padding: 20px;
  color: ${colors.white};
  background: ${colors.secondary};

  & > a {
    color: ${colors.white};
  }

  @media (min-width: 1024px) {
    text-align: center;
  }

  & > img {
    height: 20px;
    margin-bottom: -4px;
  }
`

export default function Footer() {
  return (
    <Root>
      Build with{' '}
      <span role="img" aria-label="heart">
        ❤️
      </span>
      ️&nbsp;by <a href="https://twitter.com/bluebill1049">@Bill Luo</a> & <img src={logo} alt="logo" />{' '}
      {`<React Simple Animate />`}
    </Root>
  )
}
