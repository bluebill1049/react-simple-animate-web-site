import React from 'react'
import {AnimateKeyframes} from "react-simple-animate";
import styled from "styled-components";
import ReactIcon from "../components/reactIcon";
import colors from "../styled/colors";
import MenuGroup from './menuGroup';

const HeaderWrapper = styled.div`
  background: ${colors.primary};
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 700px;
  
  @media (max-height: 813px) {
    height: 100vh;
  }
`

const Logo = styled.div`
  & > div {
    height: 128px;
    width: 200px;
    margin-bottom: 50px;
    transform-origin: 100px 64px;
  }
`

const Heading = styled.div`
  font-family: 'Fjalla One', sans-serif;
`

const H1 = styled.h1`
  font-size: 34px;
  font-weight: 300;
  color: white;
  text-align: center;
  margin-bottom: 10px;
  font-family: 'Fjalla One', sans-serif;
  letter-spacing: 1px;
`

const H2 = styled.h2`
  font-size: 20px;
  font-weight: 300;
  color: white;
  text-align: center;
  margin-bottom: 10px;
  font-family: sans-serif;
`

const Code = styled.span`
  color: ${colors.white};
  display: block;
  width: 330px;
  padding: 10px;
  text-align: center;
  border: 1px solid #ffffff17;
  border-radius: 4px;
  margin: 50px auto 0;
  align-content: unset;
`

const Header = () => (
  <HeaderWrapper>
    <MenuGroup />

    <Logo>
      <AnimateKeyframes
        play
        durationSeconds={10}
        direaction="alternate"
        iterationCount="infinite"
        keyframes={['transform: rotateZ(0deg)', 'transform: rotateZ(359deg)']}
      >
        <ReactIcon color={colors.white} />
      </AnimateKeyframes>
    </Logo>
    <Heading>
      <H1>React Simple Animate</H1>
      <H2>UI Animation Made Simple</H2>
    </Heading>

    <Code>
      <code>npm install --save styled-components</code>
    </Code>
  </HeaderWrapper>
)

export default Header
