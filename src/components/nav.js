// @flow
import React from 'react'
import colors from '../styled/colors'
import styled from 'styled-components'
import { links } from './menu'
import { Link } from 'gatsby'

const Root = styled.nav`
  position: absolute;
  top: 70px;

  & > a {
    color: ${colors.white};
    text-transform: uppercase;
    margin-right: 40px;
    text-decoration: none;
    font-size: 14px;
    font-weight: bold;

    &:last-child {
      margin-right: 0;
    }
  }
`

export default function Nav({ location: { pathname } }) {
  return (
    <Root className="nav--desktop">
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
  )
}
