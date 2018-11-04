import React from 'react'
import { PropType } from '../../styled/typography'
import Button from '@material-ui/core/Button/Button'
import { navigate } from 'gatsby'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { docco } from 'react-syntax-highlighter/styles/hljs'

const renderProps = `<Animate 
  play 
  startStyle={{ opacity: 0 }}
  endStyle={{ opacity: 1 }} 
  render={({ style }) => (
    <Component style={ style } />
  )} 
/>`

const link = (
  <Button onClick={() => navigate('/animate-group')} variant="outlined">
    Learn Animate Group
  </Button>
)

export default [
  {
    name: (
      <>
        easeType: <PropType>string</PropType> = 'linear'
      </>
    ),

    description: (
      <>
        Easing type refer to{' '}
        <a href="http://easings.net/" rel="noopener noreferrer" target="_blank">
          http://easings.net/
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
        function, which is useful for render animation component without any <code>div</code> wrapper, or if required to
        add event listener to the component.
      </>
    ),
    code: (
      <SyntaxHighlighter language="javascript" style={docco}>
        {renderProps}
      </SyntaxHighlighter>
    ),
  },
  {
    isAnimateGroup: true,
    name: (
      <>
        sequenceIndex: <PropType>number</PropType>
      </>
    ),
    description: (
      <>
        This props is used by <code>{`<AnimationGroup/>`}</code>, which provides unique array index to associate with{' '}
        <code>{`<AnimationGroup/>`}</code> sequences.
      </>
    ),
    link,
  },
  {
    name: (
      <>
        sequenceId: <PropType>string | number</PropType>
      </>
    ),
    description: (
      <>
        This props is used by <code>{`<AnimationGroup/>`}</code>, which provides unique id to associate with{' '}
        <code>{`<AnimationGroup/>`}</code> sequences.
      </>
    ),
    link,
  },
  {
    name: (
      <>
        overlaySeconds: <PropType>number</PropType>
      </>
    ),
    description: (
      <>
        This props is used by <code>{`<AnimationGroup/>`}</code>, When animation need to play ahead, which overlay on
        top of the previous animation by seconds.
      </>
    ),
    link,
  },
]
