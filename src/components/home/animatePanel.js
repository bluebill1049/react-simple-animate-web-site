// @flow
import React from 'react'
import { Animate } from 'react-simple-animate'
import SyntaxHighlighter, { registerLanguage } from 'react-syntax-highlighter/prism-light'
import jsx from 'react-syntax-highlighter/languages/prism/jsx'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import ReactIcon from '../reactIcon'
import CodeContainer from '../codeContainer'
import ButtonGroup from '../ButtonGroup';

registerLanguage('jsx', jsx)

const code = play => `<Animate
  play={${play}}
  startStyle={{opacity: 1, filter: 'blur(0)'}}
  endStyle={{opacity: 0, filter: 'blur(10px)'}}
>
  <Component />
</Animate>
`

export default class AnimatePanel extends React.PureComponent {
  state = {
    play: false,
  }

  render() {
    const { play } = this.state

    return (
      <CodeContainer title="Animation From A To B" description="Inline style animation made super easy">
        <Animate
          play={play}
          startStyle={{ opacity: 1, filter: 'blur(0)' }}
          endStyle={{ opacity: 0, filter: 'blur(10px)' }}
        >
          <ReactIcon />
        </Animate>

        <ButtonGroup buttonText={!play ? 'Play' : 'Reverse'} path={'/animate'} onClick={() => this.setState(({ play }) => ({ play: !play }))}  />

        <SyntaxHighlighter language="javascript" style={docco}>
          {code(play)}
        </SyntaxHighlighter>
      </CodeContainer>
    )
  }
}
