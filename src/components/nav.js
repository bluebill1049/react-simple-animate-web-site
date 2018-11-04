// @flow
import React from 'react'
import colors from '../styled/colors'
import styled from 'styled-components'
import { links } from './menu'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'

const Logo = styled.span`
  & > img {
    height: 30px;
    margin-bottom: -10px;
    margin-right: 30px;
  }
`

const Root = styled.nav`
  display: none;

  @media (min-width: 1024px) {
    position: absolute;
    top: 70px;
    display: block;
  }
  
  @media (min-width: 1208px) {
    top: 20px;
  }

  & > a {
    color: ${colors.white};
    text-transform: uppercase;
    margin: 0 20px;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      height: 2px;
      background: ${colors.purple};
      bottom: -4px;
      left: 0;
      width: 0;
      transition: 0.2s all;
    }

    &:hover {
      &::before {
        width: 100%;
      }
    }
  }
`

export default function Nav({ showLogo, className, location: { pathname } }) {
  return (
    <>
      <Root className={className}>
        {showLogo && (
          <Logo>
            <img src={logo} alt="logo" />
          </Logo>
        )}
        {links.map(({ name, path }) => (
          <Link
            style={{
              ...(pathname === path
                ? {
                    opacity: 0.3,
                  }
                : null),
            }}
            key={name}
            to={path}
          >
            {name}
          </Link>
        ))}
      </Root>
    </>
  )
}
