// @flow
import React from 'react'
import { Animate, AnimateGroup } from 'react-simple-animate'
import styled from 'styled-components'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import CodeContainer from '../components/codeContainer'
import ButtonGroup from "../components/ButtonGroup";

registerLanguage('jsx', jsx)

const code = play => `<AnimateGroup
  play={${play}}
>
  {['R', 'E', 'A', 'C', 'T'].map((item, index) => {
    return (
      <Animate
        key={item}
        sequenceIndex={index}
        endStyle={{ opacity: 0, transform: 'translateY(-10px)' }}
        startStyle={{ opacity: 1, transform: 'translateY(0)' }}
      >
        <Component />
      </AnimateGroup>
    )
  })}
</AnimateGroup>
`

const Character = styled.span`
  font-size: 80px;
  font-family: 'Fjalla One', Helvetica;
  padding: 0 10px;
`

const CharacterGroup = styled.div`
  height: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default class AnimatePanel extends React.PureComponent {
  state = {
    play: false,
  }

  render() {
    const { play } = this.state

    return (
      <CodeContainer title="Animation Sequences" description="Control Animate components sequences">
        <CharacterGroup>
          <AnimateGroup play={play}>
            {['R', 'E', 'A', 'C', 'T'].map((item, index) => {
              return (
                <Animate
                  key={item}
                  durationSeconds={0.2}
                  sequenceIndex={index}
                  endStyle={{ opacity: 0, transform: 'translateY(-10px)' }}
                  startStyle={{ opacity: 1, transform: 'translateY(0)' }}
                  overlaySeconds={0.1}
                  easeType="cubic-bezier(0.895, 0.03, 0.685, 0.22)"
                  render={style => (
                    <Character {...style} key={item}>
                      {item}
                    </Character>
                  )}
                />
              )
            })}
          </AnimateGroup>
        </CharacterGroup>

        <ButtonGroup buttonText={!play ? 'Play' : 'Reverse'} path={'/animate-group'} onClick={() => this.setState(({ play }) => ({ play: !play }))}  />

        <SyntaxHighlighter language="javascript" style={docco}>
          {code(play)}
        </SyntaxHighlighter>
      </CodeContainer>
    )
  }
}
