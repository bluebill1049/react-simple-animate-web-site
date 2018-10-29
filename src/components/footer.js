import React from 'react'
import styled from 'styled-components'
import colors from '../styled/colors'

const Root = styled.div`
  padding: 20px;
  color: ${colors.white};

  & > a {
    color: ${colors.white};
  }
`

export default function Footer() {
  return (
    <Root>
      Build with <span role="img" aria-label="heart">❤️</span>️ by <a href="https://twitter.com/bluebill1049">@Bill Luo</a>, Brett Master
    </Root>
  )
}
