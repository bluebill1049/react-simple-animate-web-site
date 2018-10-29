import React from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import Button from '@material-ui/core/Button/Button'
import { navigate } from 'gatsby'
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

const renderProps = `<AnimateKeyframes 
  play 
  keyframes={['opacity: 0', 'opacity: 1']} 
  render={({ style }) => (
    <Component style={ style } />
  )} 
/>
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
        specification. It's best to used for infinite animation and animation which can be paused and resumed.
      </p>
      <h3>Basic Props</h3>
      <ul>
        <li>
          <code>
            play: <Type>boolean</Type> = false
          </code>

          <p>
            Defaults to <code>false</code>, set to true to start the animation, if set <code>play</code> as{' '}
            <code>true</code> as default prop, then the animation will play right after <code>componentWillMount</code>.
          </p>
        </li>
        <li>
          <code>
            keyframes: <Type>{'Array<string> | Array<Object>'}</Type>
          </code>

          <p>
            Array of styles in <code>string</code>.
          </p>
          <SyntaxHighlighter language="javascript" style={docco}>
            {keyframesString}
          </SyntaxHighlighter>
          <p>
            Array of Object with key pair of percentage and <code>style</code>.
          </p>
          <SyntaxHighlighter language="javascript" style={docco}>
            {keyframesObject}
          </SyntaxHighlighter>
        </li>
        <li>
          <code>
            durationSeconds: <Type>number</Type> = 0.3
          </code>
          <p>
            How long the animation takes in seconds. if <code>reverseDurationSeconds</code> is not provided, then this
            apply to reverse duration seconds as well
          </p>
        </li>
        <li>
          <code>
            delaySeconds: <Type>number</Type>
          </code>

          <p>How much delay should apply before animation starts.</p>
        </li>
        <li>
          <code>
            iterationCount: <Type>string | number</Type> = 'none'
          </code>

          <p>
            whether an animation should play forwards, backwards, or alternating back and forth:&nbsp;
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
            direction: <Type>'normal' | 'reverse' | 'alternate' | 'alternate-reverse'</Type> = 'normal'
          </code>

          <p>
            Animation applies styles to target before and after execution&nbsp;
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
            playState: <Type>'running' | 'paused'</Type> = 'running'
          </code>

          <p>
            An animation is running or paused&nbsp;
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
            fillMode: <Type>'none' | 'forwards' | 'backwards' | 'both'</Type> = 'none'
          </code>

          <p>
            Animation applies styles to target before and after execution&nbsp;
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
          <code>easeType: <Type>string</Type> = 'linear'</code>
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
        <li>
          <code>
            render: <Type>Function</Type>
          </code>

          <p>
            This is a{' '}
            <a href="https://reactjs.org/docs/render-props.html" rel="noopener noreferrer" target="_blank">
              Render props
            </a>{' '}
            function, which is useful for render without any wrapper <code>div</code>
            from <code>react-simple-animate</code> or adding event listeners.
          </p>
          <SyntaxHighlighter language="javascript" style={docco}>
            {renderProps}
          </SyntaxHighlighter>
        </li>
        <li>
          <code>
            sequenceIndex: <Type>number</Type>
          </code>

          <p>
            This props is used by <code>AnimateGroup</code>, which provides unique array index to associate with
            AnimationGroup sequences.
          </p>

          <Button onClick={() => navigate('/animate-group')} variant="outlined">
            Learn Animate Group
          </Button>
        </li>
        <li>
          <code>
            sequenceId: <Type>string | number</Type>
          </code>

          <p>
            This props is used by <code>AnimateGroup</code>, which provides unique id to associate with AnimationGroup
            sequences.
          </p>
          <Button onClick={() => navigate('/animate-group')} variant="outlined">
            Learn Animate Group
          </Button>
        </li>
        <li>
          <code>
            overlaySeconds: <Type>number</Type>
          </code>

          <p>
            This props is used by <code>AnimateGroup</code>, When animation need to play ahead, which overlay on top of
            the previous animation by seconds.
          </p>
          <Button onClick={() => navigate('/animate-group')} variant="outlined">
            Learn Animate Group
          </Button>
        </li>
      </ul>

      <h3>Examples: </h3>
      <p>The following example will animate the component to move at x coordinate 10px with 3 times.</p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {exmaple}
      </SyntaxHighlighter>
    </ContentContainer>
  )
}
