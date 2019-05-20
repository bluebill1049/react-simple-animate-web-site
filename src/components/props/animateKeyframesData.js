import { PropType } from '../../styled/typography'
import React from 'react'
import commonData from './commonData'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { docco } from 'react-syntax-highlighter/styles/hljs'

const renderProps = `<AnimateKeyframes 
  play 
  keyframes={['opacity: 0', 'opacity: 1']} // same as CSS @keyframes { 0% { ... } 100% { ... }}
  render={({ style }) => (
    <Component style={ style } />
  )} 
/>`

const keyframesString = `<AnimateKeyframes 
  play 
  keyframes={['opacity: 0', 'opacity: 1']} // same as CSS @keyframes { 0% { ... } 100% { ... }}
/>
  <Component />
</AnimateKeyframes>
`

const keyframesObject = `<AnimateKeyframes 
  play 
  keyframes={[
    { 0: 'opacity: 0' }, // 0%
    { 50: 'opacity: 0.5' }, // 50%
    { 100: 'opacity: 1' } // 100%
  ]}
/>
  <Component />
</AnimateKeyframes>
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
        Defaults to <code>false</code>, set to true to start the animation, if set <code>play</code> as{' '}
        <code>true</code> as default prop, then the animation will play right after <code>componentDidMount</code>
      </>
    ),
  },
  {
    name: (
      <>
        pause: <PropType>boolean</PropType> = false
      </>
    ),
    description: (
      <>
        An animation is running or paused:&nbsp;
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state"
          rel="noopener noreferrer"
          target="_blank"
        >
          animation-play-state
        </a>
      </>
    ),
  },
  {
    name: (
      <>
        keyframes: <PropType>{'Array<string> | Array<Object>'}</PropType> <i>required</i>
      </>
    ),
    customised: (
      <>
        <p>
          Array of styles in <code>string</code>.
        </p>
        <SyntaxHighlighter language="javascript" style={docco}>
          {keyframesString}
        </SyntaxHighlighter>
        <p>
          Array of <code>Object</code> with key pair of percentage and style.
        </p>
        <SyntaxHighlighter language="javascript" style={docco}>
          {keyframesObject}
        </SyntaxHighlighter>
      </>
    ),
  },
  {
    name: (
      <>
        duration: <PropType>number</PropType> = 0.3
      </>
    ),
    description: 'How long the animation takes in seconds.',
  },
  {
    name: (
      <>
        delay: <PropType>number</PropType>
      </>
    ),
    description: (
      <>
        How much delay should apply before animation starts:{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay"
          rel="noopener noreferrer"
          target="_blank"
        >
          animation-delay
        </a>
      </>
    ),
  },
  {
    name: (
      <>
        iterationCount: <PropType>string | number</PropType> = 'none'
      </>
    ),
    description: (
      <>
        Whether an animation should play forwards, backwards, or alternating back and forth:&nbsp;
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction"
          rel="noopener noreferrer"
          target="_blank"
        >
          animation-direction
        </a>
      </>
    ),
  },
  {
    name: (
      <>
        direction: <PropType>'normal' | 'reverse' | 'alternate' | 'alternate-reverse'</PropType> = 'normal'
      </>
    ),
    description: (
      <>
        Animation applies styles to target before and after execution:&nbsp;
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode"
          rel="noopener noreferrer"
          target="_blank"
        >
          animation-play-state
        </a>
      </>
    ),
  },
  {
    name: (
      <>
        fillMode: <PropType>'none' | 'forwards' | 'backwards' | 'both'</PropType> = 'none'
      </>
    ),
    description: (
      <>
        Animation applies styles to target before and after execution:&nbsp;
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode"
          rel="noopener noreferrer"
          target="_blank"
        >
          animation-play-state
        </a>
      </>
    ),
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

  ...commonData,
]
