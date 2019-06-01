import React from 'react'
import styled from 'styled-components'
import colors from '../styled/colors'
import logo from '../images/logo.svg'

const Root = styled.div`
  padding: 0 20px 20px;
  color: ${colors.white};
  background: ${colors.secondary};
  font-size: 14px;

  & > a {
    color: ${colors.white};
  }

  @media (min-width: 1024px) {
    text-align: center;
  }

  & > img {
    height: 20px;
    margin-bottom: -4px;
    margin-left: 5px;
    margin-right: 5px;
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

      <a
        href="https://www.producthunt.com/posts/react-simple-animate?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-react-simple-animate"
        target="_blank"
        style={{
          top: 13,
          position: 'relative',
          marginLeft: 10
        }}
        rel="noopener noreferrer"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=156850&theme=dark"
          alt="React Simple Animate - UI animation made simple | Product Hunt Embed"
          width="150px"
          height="35px"
          style={{
            margin: 0
          }}
        />
      </a>
    </Root>
  )
}
