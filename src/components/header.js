import React from 'react'
import { AnimateKeyframes } from 'react-simple-animate'
import styled from 'styled-components'
import ReactIcon from '../components/reactIcon'
import colors from '../styled/colors'
import TopMenuGroup from './topMenuGroup'
import { H1, H2 } from '../styled/typography';

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

const SnackbarWrapper = styled.div`
  & > div > div {
    background: ${colors.secondary};
  }
`

class Header extends React.PureComponent {
  state = {
    showSnackBars: false,
  }

  handleClose = () => {
    this.setState({
      showSnackBars: false,
    })
  }

  render() {
    const { showSnackBars } = this.state

    return (
      <HeaderWrapper>
        <TopMenuGroup />

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
