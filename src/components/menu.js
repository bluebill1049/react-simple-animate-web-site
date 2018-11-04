import { Link } from 'gatsby'
import React from 'react'
import styled from 'styled-components'
import colors from '../styled/colors'

const Root = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100vw;
  background: ${colors.secondary};
  
  & > ul {
    list-style: none;
    color: ${colors.white}
    font-size: 20px;
    margin-top: 20px;
    font-weight: bold;
    
    & > ul {
      list-style-type: disc;
      text-transform: none;
    }
  }
    
  & li {
    padding: 10px 0;
    border-bottom: 1px solid ${colors.primary};
  }
  
  & a {
    color: ${colors.white};
    text-decoration: none;
    display: block;
  }
`

export const links = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/basics',
    name: 'Basics',
  },
  {
    path: '/advanced',
    name: 'Advanced',
  },
  {
    path: '/animate',
    name: '<Animate />',
  },
  {
    path: '/animate-keyframes',
    name: '<AnimateKeyframes />',
  },
  {
    path: '/animate-group',
    name: '<AnimateGroup />',
  },
]

export default ({ style, location: { pathname } = {} }) => (
  <Root style={style}>
    <ul>
      {links.map(({ path, name }) => {
        return (
          <li
            style={{
              ...(pathname === path || pathname === `${path}/`
                ? {
                    opacity: 0.3,
                  }
                : null),
            }}
            key={name}
          >
            <Link to={path}>{name}</Link>
          </li>
        )
      })}
    </ul>
  </Root>
)
