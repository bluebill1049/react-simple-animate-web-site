import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import colors from '../styled/colors'
import CommonProps from './CommonProps'
import { PropType } from '../styled/typography';

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

const keyframesString = `<AnimateKeyframes 
  play 
  keyframes={['opacity: 0', 'opacity: 1']}
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

const exmaple = `
import React from 'react';
import { AnimateKeyframes }  from 'react-simple-animate';
import YourComponent from './YourComponent';

export default ({ children, play, onCompleteCallBack }) => {
  return <AnimateKeyframes 
    play 
    delaySeconds={1}
    durationSeconds={10}]
    iterationCount={3}
    direction="alternative"
    keyframes={[
       'transform: translateY(0)',
       'transform: translateY(10px)'
    ]}
  />
    <Component />
  </YourComponent>
};
`

export default function Content() {
  return (
    <ContentContainer>
      <p>
        <code>{'<AnimateKeyframes />'}</code> is implemented according to{' '}
        <a
          href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations"
          target="_blank"
          rel="noopener noreferrer"
        >
          CSS animation
        </a>{' '}
        specification. It's best to used for infinite animation, or animation which can be paused and resumed.
      </p>
      <h3>Basic Props</h3>
      <ul>
        <li>
          <code>
            play: <PropType>boolean</PropType> = false
          </code>

          <p>
            Defaults to <code>false</code>, set to true to start the animation, if set <code>play</code> as{' '}
            <code>true</code> as default prop, then the animation will play right after <code>componentDidMount</code>.
          </p>
        </li>
        <li>
          <code>
            keyframes: <PropType>{'Array<string> | Array<Object>'}</PropType>
          </code>

          {/*Or*/}

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
        </li>
        <li>
          <code>
            durationSeconds: <PropType>number</PropType> = 0.3
          </code>
          <p>How long the animation takes in seconds.</p>
        </li>
        <li>
          <code>
            delaySeconds: <PropType>number</PropType>
          </code>

          <p>
            How much delay should apply before animation starts:{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-delay"
              rel="noopener noreferrer"
              target="_blank"
            >
              animation-delay
            </a>
            .
          </p>
        </li>
        <li>
          <code>
            iterationCount: <PropType>string | number</PropType> = 'none'
          </code>

          <p>
            Whether an animation should play forwards, backwards, or alternating back and forth:&nbsp;
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-direction"
              rel="noopener noreferrer"
              target="_blank"
            >
              animation-direction
            </a>
          </p>
        </li>
        <li>
          <code>
            direction: <PropType>'normal' | 'reverse' | 'alternate' | 'alternate-reverse'</PropType> = 'normal'
          </code>

          <p>
            Animation applies styles to target before and after execution:&nbsp;
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode"
              rel="noopener noreferrer"
              target="_blank"
            >
              animation-play-state
            </a>
          </p>
        </li>
        <li>
          <code>
            playState: <PropType>'running' | 'paused'</PropType> = 'running'
          </code>

          <p>
            An animation is running or paused:&nbsp;
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-play-state"
              rel="noopener noreferrer"
              target="_blank"
            >
              animation-play-state
            </a>
          </p>
        </li>
        <li>
          <code>
            fillMode: <PropType>'none' | 'forwards' | 'backwards' | 'both'</PropType> = 'none'
          </code>

          <p>
            Animation applies styles to target before and after execution:&nbsp;
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/animation-fill-mode"
              rel="noopener noreferrer"
              target="_blank"
            >
              animation-play-state
            </a>
          </p>
        </li>
        <li>
          <code>
            easeType: <PropType>string</PropType> = 'linear'
          </code>
          <p>
            Easing type refer to{' '}
            <a href="http://easings.net/" rel="noopener noreferrer" target="_blank">
              http://easings.net/
            </a>
          </p>
        </li>
      </ul>

      <h3>Advanced</h3>
      <ul>
        <CommonProps />
      </ul>

      <h3>Examples: </h3>
      <p>The following example will animate the component to move at X coordinate 3 times.</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {exmaple}
      </SyntaxHighlighter>
    </ContentContainer>
  )
}
