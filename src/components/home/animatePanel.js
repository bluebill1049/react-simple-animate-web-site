// @flow
import React, { useState } from 'react'
import { Animate } from 'react-simple-animate'
import styled from 'styled-components'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import ReactIcon from '../reactIcon'
import CodeContainer from '../codeContainer'
import ButtonGroup from '../ButtonGroup'
import CodeToggleButton from "../codeToggleButtons";

registerLanguage('jsx', jsx)

const ReactIconExtends = styled(ReactIcon)`
  max-height: 250px;
`

const code = play => `<Animate
  play={${play}}
  start={{ opacity: 1, filter: 'blur(0)' }}
  end={{ opacity: 0, filter: 'blur(10px)' }}
>
  <Component />
</Animate>
`

const hookCode = () => `const { play, style } = useAnimate({ 
  start: { opacity: 0 }, 
  end: { opacity: 1 } 
});

<div style={style}></div>
`

export default function AnimatePanel() {
  const [play, setPlay] = useState(false)
  const [mode, setMode] = useState('component')

  return (
    <CodeContainer title="Transition from style A to B." description="React style animation made easy">
      <Animate play={play} start={{ opacity: 1, filter: 'blur(0)' }} end={{ opacity: 0, filter: 'blur(10px)' }}>
        <ReactIconExtends />
      </Animate>

      <ButtonGroup buttonText={!play ? 'Play' : 'Reverse'} path={'/animate'} onClick={() => setPlay(!play)} />

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
