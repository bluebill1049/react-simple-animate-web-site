import React from 'react'
import styled from 'styled-components'
import colors from '../styled/colors'
import logo from '../images/logo.svg'

const Root = styled.div`
  padding: 20px 20px 40px;
  color: ${colors.white};
  background: ${colors.secondary};
  font-size: 14px;
  
  @media (min-width: 1024px) {
    text-align: center;
  }
`

const ProductHuntLink = styled.a`
  top: 13px;
  position: relative;
  display: block;
  margin-left: 0;

  @media (min-width: 1024px) {
    margin-left: 10px;
  }
`

const RSA = styled.span`
  display: block;
  
  @media (min-width: 768px) {
    display: inline;
  }

  & > a {
    color: ${colors.white};
  }
  
  & > img {
    display: none;
    height: 20px;
    margin-bottom: -4px;
    margin-left: 5px;
    margin-right: 5px;

    @media (min-width: 768px) {
      display: inline-block;
    }
  }
`

export default function Footer() {
  return (
    <Root>
      Build with{' '}
      <span role="img" aria-label="heart">
        ❤️
      </span>
      ️&nbsp;
      <RSA>
        A project by <a href="https://www.beekai.com/" target="_blank" rel="noopener noreferrer">@Bill Luo</a></RSA>
      <ProductHuntLink
        href="https://www.producthunt.com/posts/react-simple-animate?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-react-simple-animate"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=156850&theme=dark"
          alt="React Simple Animate - UI animation made simple | Product Hunt Embed"
          width="150px"
          height="35px"
          style={{
            margin: 0,
          }}
        />
      </ProductHuntLink>
    </Root>
  )
}
