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

const renderProps = `<Animate 
  play 
  startStyle={{ opacity: 0 }}
  endStyle={{ opacity: 1 }} 
  render={({ style }) => (
    <Component style={ style } />
  )} 
/>
`

const example = `
import React from 'react';
import { Animate }  from 'react-simple-animate';
import YourComponent from './YourComponent';

export default ({ children, play, onCompleteCallBack }) => {
  return <Aniamte
    play={play}
    durationSeconds={1}
    delaySeconds={0.3}
    reverseDurationSeconds={0.2}
    reverseDelaySeconds={0.1}
    startStyle={{ transform: 'translate(0, 0)' }}
    endStyle={{ opacity: 'translate(10px, 10px)' }}
    easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
    onComplete={onCompleteCallBack}
  >
    <YourComponent />
  </Aniamte>
};
`

export default function Content() {
  return (
    <ContentContainer>
      <p>
        <code>{'<Animate />'}</code> is made to solve a simple React animation problem; animates <code>Components</code>{' '}
        from destination A to destination B with the capability to revers play.
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
            startStyle: <Type>Object</Type>
          </code>

          <p>Component initial inline style.</p>
        </li>
        <li>
          <code>
            endStyle: <Type>Object</Type>
          </code>

          <p>Component transition to inline style.</p>
        </li>
        <li>
          <code>
            onCompleteStyle: <Type>Object</Type>
          </code>
          <p>
            Style to be applied after the animation is completed. Useful when you want to apply{' '}
            <code>display: none</code> after animation is complete
          </p>
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
            reverseDurationSeconds: <Type>number</Type>
          </code>

          <p>How long the reverse/toggle animation takes in seconds.</p>
        </li>
        <li>
          <code>
            reverseDelaySeconds: <Type>number</Type>
          </code>

          <p>How much delay should apply when reverse/toggle animation.</p>
        </li>
        <li>
          <code>
            onComplete: <Type>Function</Type>
          </code>

          <p>Call back function after animation complete.</p>
        </li>
        <li>
          <code>
            easeType: <Type>string</Type> = 'linear'
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
        <li>
          <code>
            mount: <Type>boolean</Type> = false
          </code>

          <p>
            Apply <code>mount</code> as true, will mount component then apply animation.
          </p>
        </li>
        <li>
          <code>
            unMount: <Type>boolean</Type> = false
          </code>

          <p>
            Apply <code>unMount</code> as true, will unMount component after animation completion.
          </p>
        </li>
      </ul>

      <h3>Examples: </h3>
      <p>
        The following example will animate component's translate x and y with different duration seconds from play and
        reverse the animation
      </p>
      <SyntaxHighlighter language="javascript" style={docco}>
        {example}
      </SyntaxHighlighter>
    </ContentContainer>
  )
}
