import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import colors from '../styled/colors'

const ContentContainer = styled.div`
  padding: 20px;

  & ul {
    list-style: none;
    margin-left: 0;
  }

  & li > code {
    margin-bottom: 10px;
    display: block;
    padding: 10px;
    background: ${colors.secondary};
    color: ${colors.white};
  }
`

const Type = styled.span`
  color: ${colors.purple};
`

const sequences = `<AnimateGroup play> 
  <Animate endStyle={{ opacity: 1 }} sequnceIndex={0} /> // play first
  <Animate endStyle={{ opacity: 0.5 }} sequnceIndex={1} /> // play second
  <Animate endStyle={{ opacity: 0 }} sequnceIndex={2} /> // play last
</AnimateGroup>
`

export default function Content() {
  return (
    <ContentContainer>
      <h3>Basic</h3>
      <ul>
        <li>
          <code>
            play: <Type>boolean</Type> = false
          </code>

          <p>
            Defaults to <code>false</code>, set to true to start the animation.
          </p>
        </li>
        <li>
          <code>
            sequences: <Type>{`Array<number> | Array<Object>`}</Type>
          </code>

          <p>
            Array with <code>sequenceIndex</code> or <code>sequenceId</code>. This prop is <b>optional</b>, if not
            provided, then it will animate in order of <code>sequenceIndex</code>.
          </p>

          <SyntaxHighlighter language="javascript" style={docco}>
            {sequences}
          </SyntaxHighlighter>
        </li>
        <li>
          <code>
            reverseSequences: <Type>{`Array<number> | Array<Object>`}</Type>
          </code>

          <p>
            it's the same as <code>sequences</code>, except this will applied when <code>play</code> set to false and
            animation group play in a reverse order.
          </p>
        </li>
      </ul>

      <h3>Advanced Examples</h3>

    </ContentContainer>
  )
}
