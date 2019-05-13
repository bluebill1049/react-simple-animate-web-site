import { PropType } from '../../styled/typography'
import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { docco } from 'react-syntax-highlighter/styles/hljs'

const sequences = `<AnimateGroup play> 
  <Animate end={{ opacity: 1 }} sequnceIndex={0} /> // play first
  <Animate end={{ opacity: 0.5 }} sequnceIndex={1} /> // play second
  <Animate end={{ opacity: 0 }} sequnceIndex={2} /> // play last
</AnimateGroup>
`

export default [
  {
    name: (
      <>
        play: <PropType>boolean</PropType> = false <i>required</i>
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
        Array with <code>sequenceIndex</code> or <code>sequenceId</code>. default behaviour will be animate in order of{' '}
        <code>sequenceIndex</code>.
      </>
    ),
    code: (
      <SyntaxHighlighter language="javascript" style={docco}>
        {sequences}
      </SyntaxHighlighter>
    ),
  },
]
