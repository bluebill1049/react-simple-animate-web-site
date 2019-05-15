// @flow
import React, { useState } from 'react'
import { Animate, AnimateGroup } from 'react-simple-animate'
import styled from 'styled-components'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import CodeContainer from '../codeContainer'
import ButtonGroup from '../ButtonGroup'
import CodeToggleButton from "../codeToggleButtons";

registerLanguage('jsx', jsx)

const code = play => `<AnimateGroup
  play={${play}}
>
  {['R', 'E', 'A', 'C', 'T'].map((item, index) => {
    return (
      <Animate
        key={item}
        sequenceIndex={index}
        end={{ opacity: 0, transform: 'translateY(-10px)' }}
        start={{ opacity: 1, transform: 'translateY(0)' }}
      >
        <Component />
      </Animate>
    )
  })}
</AnimateGroup>
`

const hookCode = () => `const items = ['R', 'E', 'A', 'C', 'T'];
const { styles, play } = useAnimateGroup({
  sequences: items.map(() => ({
    start: { opacity: 1, transform: 'translateY(0)' },
    end: { opacity: 0, transform: 'translateY(-10px)' }
  }))
})

items.map((item, index) => <div key={item} style={styles[index]}>{item}</div>)
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

export default function AnimatePanel() {
  const [play, setPlay] = useState(false)
  const [mode, setMode] = useState('component')

  return (
    <CodeContainer title="Animation Sequences" description="Control Animate components sequences">
      <CharacterGroup>
        <AnimateGroup play={play}>
          {['R', 'E', 'A', 'C', 'T'].map((item, index) => {
            return (
              <Animate
                key={item}
                duration={0.2}
                sequenceIndex={index}
                end={{ opacity: 0, transform: 'translateY(-10px)' }}
                start={{ opacity: 1, transform: 'translateY(0)' }}
                overlay={0.1}
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

      <ButtonGroup
        buttonText={!play ? 'Play' : 'Reverse'}
        path={'/animate-group'}
        onClick={() => setPlay(!play)}
      />

      <CodeToggleButton setMode={setMode} mode={mode} />

      {mode === 'component' && (
        <SyntaxHighlighter language="javascript" style={docco}>
          {code(play)}
        </SyntaxHighlighter>
      )}
      {mode === 'hook' && (
        <SyntaxHighlighter language="javascript" style={docco}>
          {hookCode(play)}
        </SyntaxHighlighter>
      )}
    </CodeContainer>
  )
}
