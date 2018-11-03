import React from 'react'
import { AnimateKeyframes } from 'react-simple-animate'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import colors from '../styled/colors'
import TopMenuGroup from './topMenuGroup'
import { H1, H2 } from '../styled/typography'
import Nav from './nav'

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
  & img {
    width: 120px;
    height: 120px;
    transform-origin: 50% 50%;
    margin-bottom: 0;

    @media (min-width: 768px) {
      width: 200px;
      height: 200px;
    }
  }
`

const Heading = styled.div`
  margin-top: 40px;
  font-family: 'Fjalla One', sans-serif;
`

const Code = styled.span`
  color: ${colors.white};
  display: block;
  padding: 10px 20px;
  text-align: center;
  border: 1px solid #ffffff17;
  border-radius: 4px;
  margin: 50px auto 0;
  align-content: unset;
`

class Header extends React.PureComponent {
  state = {
    showSnackBars: false,
  }

  render() {
    return (
      <HeaderWrapper>
        <Nav location={this.props.location} />

        <TopMenuGroup />

        <Logo>
          <AnimateKeyframes
            play
            durationSeconds={10}
            direaction="alternate"
            iterationCount="infinite"
            keyframes={['transform: rotateZ(359deg)', 'transform: rotateZ(0deg)']}
          >
            <img src={logo} alt="logo" />
          </AnimateKeyframes>
        </Logo>

        <Heading>
          <H1>React Simple Animate</H1>
          <H2>UI Animation Made Simple</H2>
        </Heading>

        <Code>
          <code
            onClick={() => {
              this.setState({ showSnackBars: true })
            }}
          >
            npm install --S react-simple-animate
          </code>
        </Code>
      </HeaderWrapper>
    )
  }
}

export default Header
