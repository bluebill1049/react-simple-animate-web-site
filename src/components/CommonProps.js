import React from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import Button from '@material-ui/core/Button/Button'
import { navigate } from 'gatsby'
import { PropType } from '../styled/typography';

const renderProps = `<Animate 
  play 
  startStyle={{ opacity: 0 }}
  endStyle={{ opacity: 1 }} 
  render={({ style }) => (
    <Component style={ style } />
  )} 
/>
`

export default function CommonProps() {
  return (
    <>
      <li>
        <code>
          render: <PropType>Function</PropType>
        </code>

        <p>
          This is a{' '}
          <a href="https://reactjs.org/docs/render-props.html" rel="noopener noreferrer" target="_blank">
            Render props
          </a>{' '}
          function, which is useful for render animation component without any <code>div</code> wrapper, or if required
          to add event listener to the component.
        </p>
        <SyntaxHighlighter language="javascript" style={docco}>
          {renderProps}
        </SyntaxHighlighter>
      </li>
      <li>
        <code>
          sequenceIndex: <PropType>number</PropType>
        </code>

        <p>
          This props is used by <code>{`<AnimationGroup/>`}</code>, which provides unique array index to associate with{' '}
          <code>{`<AnimationGroup/>`}</code> sequences.
        </p>

        <Button onClick={() => navigate('/animate-group')} variant="outlined">
          Learn Animate Group
        </Button>
      </li>
      <li>
        <code>
          sequenceId: <PropType>string | number</PropType>
        </code>

        <p>
          This props is used by <code>{`<AnimationGroup/>`}</code>, which provides unique id to associate with{' '}
          <code>{`<AnimationGroup/>`}</code> sequences.
        </p>
        <Button onClick={() => navigate('/animate-group')} variant="outlined">
          Learn Animate Group
        </Button>
      </li>
      <li>
        <code>
          overlaySeconds: <PropType>number</PropType>
        </code>

        <p>
          This props is used by <code>{`<AnimationGroup/>`}</code>, When animation need to play ahead, which overlay on
          top of the previous animation by seconds.
        </p>
        <Button onClick={() => navigate('/animate-group')} variant="outlined">
          Learn Animate Group
        </Button>
      </li>
      <li>
        <code>
          mount: <PropType>boolean</PropType> = false
        </code>

        <p>
          Apply <code>mount</code> as true, will mount component then apply animation.
        </p>
      </li>
    </>
  )
}
