// @flow
import React from 'react'
import colors from '../styled/colors'
import styled from 'styled-components'
import { links } from './menu'
import { Link } from 'gatsby'
import logo from '../images/logo.svg'

const Logo = styled.span`
  & img {
    height: 30px;
    margin-bottom: -10px;
    margin-right: 10px;
  }
`

const Root = styled.nav`
  display: none;

  @media (min-width: 1024px) {
    position: absolute;
    top: 20px;
    display: block;
  }

  & > a {
    color: ${colors.white};
    text-transform: uppercase;
    margin: 0 15px;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;
    position: relative;
    padding: 10px 0;

    &::before {
      content: '';
      position: absolute;
      height: 2px;
      background: ${colors.purple};
      bottom: 4px;
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
            <Link to="/">
              <img src={logo} alt="logo" />
            </Link>
          </Logo>
        )}
        {links.slice(1).map(({ name, path }) => (
          <Link
            style={{
              ...(pathname === path || pathname === `${path}/`
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
