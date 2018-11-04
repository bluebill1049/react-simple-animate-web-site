import { PropType } from '../../styled/typography'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { docco } from 'react-syntax-highlighter/styles/hljs'

const sequences = `<AnimateGroup play> 
  <Animate endStyle={{ opacity: 1 }} sequnceIndex={0} /> // play first
  <Animate endStyle={{ opacity: 0.5 }} sequnceIndex={1} /> // play second
  <Animate endStyle={{ opacity: 0 }} sequnceIndex={2} /> // play last
</AnimateGroup>
`

export default [
  {
    name: (
      <>
        play: <PropType>boolean</PropType> = false
      </>
    ),
    description: (
      <>
        Defaults to <code>false</code>, set to true to start the animation.
      </>
    ),
  },
  {
    name: (
      <>
        sequences: <PropType>{`Array<number> | Array<Object>`}</PropType>
      </>
    ),
    description: (
      <>
        Array with <code>sequenceIndex</code> or <code>sequenceId</code>. This prop is <b>optional</b>, if not provided,
        then it will animate in order of <code>sequenceIndex</code>.
      </>
    ),
    code: (
      <SyntaxHighlighter language="javascript" style={docco}>
        {sequences}
      </SyntaxHighlighter>
    ),
  },
  {
    name: (
      <>
        reverseSequences: <PropType>{`Array<number> | Array<Object>`}</PropType>
      </>
    ),
    description: (
      <>
        Share the same behaviour as <code>sequences</code>. This prop is <b>optional</b>, except this will applied when{' '}
        <code>play</code> set to <code>false</code>.
      </>
    ),
  },
]
