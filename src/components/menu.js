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

export default ({ style }) => (
  <Root style={style}>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/animate">{`<Animate />`}</Link>
      </li>
      <li>
        <Link to="/animate-keyframes">{`<AnimateKeyframes />`}</Link>
      </li>
      <li>
        <Link to="/animate-group">{`<AnimateGroup />`}</Link>
      </li>
    </ul>
  </Root>
)
