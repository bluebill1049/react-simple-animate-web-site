// @flow
import React, { useState } from 'react'
import { AnimateKeyframes } from 'react-simple-animate'
import styled from 'styled-components'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import colors from '../../styled/colors'
import CodeContainer from '../codeContainer'
import ButtonGroup from '../ButtonGroup'
import CodeToggleButton from "../codeToggleButtons";

registerLanguage('jsx', jsx)

const code = play => `<AnimateKeyframes
  play
  pause={${!play ? 'true' : 'false'}}
  iterationCount="infinite"
  direction="alternate"
  duration={5}
  keyframes={[
    'transform: rotateX(0) rotateY(0) rotateZ(0)',
    'transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)',
  ]}
>
  <Component />
</AnimateKeyframes>
`

const hookCode = () => `const { play, style } = useAnimateKeyframes({ 
  iterationCount: 'infinite',
  direction: 'alternate',
  duration: 5,
  keyframes: [
    'transform: rotateX(0) rotateY(0) rotateZ(0)',
    'transform: rotateX(360deg) rotateY(360deg) rotateZ(360deg)',
  ]
});

<div style={style}></div>
`

const View = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  perspective: 400px;
  height: 490px;

  & > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    transform: rotateX(60deg) rotateZ(-30deg);
    width: 180px;
    height: 180px;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;

    & > div:first-child {
      &::before,
      &::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        width: 20px;
        height: 20px;
        border-radius: 100%;
        background: ${colors.primary};
        box-sizing: border-box;
      }
    }
  }
`

const Cricle = styled.div`
  width: 180px;
  height: 180px;
  position: absolute;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  border-radius: 100%;
  box-sizing: border-box;
  border: 10px solid ${colors.primary};
`

const ViewWrapper = styled.div`
  height: 300px;
`

export default function AnimateKeyframesPanel() {
  const [play, setPlay] = useState(false)
  const [mode, setMode] = useState('component')

  return (
    <CodeContainer title="Animate CSS Keyframes" description="Defined your animation keyframes in your Component">
      <ViewWrapper>
        <View>
          <AnimateKeyframes
            play={!play}
            iterationCount="infinite"
            direction="alternate"
            duration={5}
            keyframes={[
              'rotateX(0) rotateY(0) rotateZ(0)',
              'transform: rotateX(359deg) rotateY(359deg) rotateZ(359deg)',
            ]}
          >
            {Array(3)
              .fill(0)
              .map((_, i) => (
                <Cricle
                  style={{
                    transform: `rotateZ(${((i + 1) / 5) * 360}deg) rotateX(63.435deg)`,
                  }}
                  key={i}
                />
              ))}
          </AnimateKeyframes>
        </View>
      </ViewWrapper>

      <ButtonGroup buttonText={!play ? 'Pause' : 'Resume'} path={'/animate-keyframes'} onClick={() => setPlay(!play)} />

      <CodeToggleButton setMode={setMode} mode={mode} />

      {mode === 'component' && <SyntaxHighlighter language="javascript" style={docco}>
        {code(play)}
      </SyntaxHighlighter>}
      {mode === 'hook' && <SyntaxHighlighter language="javascript" style={docco}>
        {hookCode(play)}
      </SyntaxHighlighter>}
    </CodeContainer>
  )
}
