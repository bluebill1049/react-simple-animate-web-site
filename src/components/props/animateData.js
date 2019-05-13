import { PropType } from '../../styled/typography'
import React from 'react'
import commonData from './commonData'
import SyntaxHighlighter from "react-syntax-highlighter/prism-light";
import {docco} from "react-syntax-highlighter/styles/hljs";

const renderProps = `<Animate 
  play 
  start={{ opacity: 0 }}
  end={{ opacity: 1 }} 
  render={({ style }) => (
    <Component style={ style } />
  )} 
/>`

export default [
  {
    name: (
      <>
        play: <PropType>boolean</PropType> = false <i>required</i>
      </>
    ),
    description: (
      <>
        Defaults to <code>false</code>, set to true to start the animation, if set <code>play</code> as{' '}
        <code>true</code> as default prop, then the animation will play right after <code>componentDidMount</code>.
      </>
    ),
  },
  {
    name: (
      <>
        end: <PropType>Object</PropType> <i>required</i>
      </>
    ),
    description: 'Component transition to inline style.',
  },
  {
    name: (
      <>
        start: <PropType>Object</PropType>
      </>
    ),

    description: 'Component initial inline style.',
  },
  {
    name: (
      <>
        {' '}
        onComplete: <PropType>Object</PropType>
      </>
    ),
    description: (
      <>
        Style to be applied after the animation is completed. Useful when you want to apply <code>display: none</code>{' '}
        after animation is completed.
      </>
    ),
  },
  {
    name: (
      <>
        duration: <PropType>number</PropType> = 0.3
      </>
    ),
    description: (
      <>
        How long the animation takes in seconds.
      </>
    ),
  },
  {
    name: (
      <>
        delay: <PropType>number</PropType>
      </>
    ),
    description: 'How much delay should apply before animation starts',
  },
  {
    name: (
      <>
        onComplete: <PropType>Function</PropType>
      </>
    ),
    description: `Call back function after animation complete.`,
  },
  {
    name: (
      <>
        render: <PropType>Function</PropType>
      </>
    ),
    description: (
      <>
        This is a{' '}
        <a href="https://reactjs.org/docs/render-props.html" rel="noopener noreferrer" target="_blank">
          Render props
        </a>{' '}
        function, which is useful for render animation component without any <code>div</code> or <code>span</code>{' '}
        wrapper.
      </>
    ),
    code: (
      <SyntaxHighlighter language="javascript" style={docco}>
        {renderProps}
      </SyntaxHighlighter>
    ),
  },
  // {
  //   name: (
  //     <>
  //       mount: <PropType>boolean</PropType> = false
  //     </>
  //   ),
  //   description: <>Apply <code>mount</code> as true, will mount component then apply animation.</>,
  // },
  // {
  //   name: (
  //     <>
  //       unMount: <PropType>boolean</PropType> = false
  //     </>
  //   ),
  //
  //   description: <>Apply <code>unMount</code> as true, will unMount component after animation completion.</>,
  // },
  ...commonData,
]
