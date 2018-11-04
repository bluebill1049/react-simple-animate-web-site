import React, { Component } from 'react'
import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import colors from '../styled/colors'
import CommonProps from './CommonProps'
import Button from '@material-ui/core/Button'
import { PropsContentContainer } from '../styled/containers'
import { PropType } from '../styled/typography'

const Type = styled.span`
  color: ${colors.purple};
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

const data = [
  {
    name: (
      <>
        play: <Type>boolean</Type> = false
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
        startStyle: <Type>Object</Type>
      </>
    ),

    description: 'Component initial inline style.',
  },
  {
    name: (
      <>
        endStyle: <Type>Object</Type>
      </>
    ),

    description: 'Component transition to inline style.',
  },
  {
    name: (
      <>
        {' '}
        onCompleteStyle: <Type>Object</Type>
      </>
    ),
    description: `Style to be applied after the animation is completed. Useful when you want to apply{' '}
  <code>display: none</code> after animation is completed.`,
  },
  {
    name: (
      <>
        durationSeconds: <Type>number</Type> = 0.3
      </>
    ),
    description: (
      <>
        How long the animation takes in seconds.( if <code>reverseDurationSeconds</code> is not provided, then this
        apply to reverse animation duration seconds as well. )
      </>
    ),
  },
  {
    name: (
      <>
        delaySeconds: <Type>number</Type>
      </>
    ),
    description: 'How much delay should apply before animation starts',
  },
  {
    name: (
      <>
        reverseDurationSeconds: <Type>number</Type>
      </>
    ),
    description: 'How long the reverse/toggle animation takes in seconds.',
  },
  {
    name: (
      <>
        reverseDelaySeconds: <Type>number</Type>
      </>
    ),
    description: `How much delay should apply when reverse/toggle animation.`,
  },
  {
    name: (
      <>
        onComplete: <Type>Function</Type>
      </>
    ),
    description: `Call back function after animation complete.`,
  },
  {
    name: (
      <>
        easeType: <Type>string</Type> = 'linear'
      </>
    ),

    description: (
      <>
        to{' '}
        <a href="http://easings.net/" rel="noopener noreferrer" target="_blank">
          http://easings.net/
        </a>
      </>
    ),
  },
  {
    name: (
      <>
        mount: <PropType>boolean</PropType> = false
      </>
    ),
    description: `Apply <code>mount</code> as true, will mount component then apply animation.`,
  },
  {
    name: (
      <>
        unMount: <Type>boolean</Type> = false
      </>
    ),

    description: `Apply <code>unMount</code> as true, will unMount component after animation completion.`,
  },
]

const Side = styled.div`
  display: none;

  @media (min-width: 1024px) {
    display: block;
    position: sticky;
    top: 0;
  }
`

export default class Content extends Component {
  constructor(props) {
    super(props)
    this.codeRef = []
    this.example = React.createRef()
    data.forEach((_, i) => {
      this.codeRef[i] = React.createRef()
    })
  }

  goToProp = i => {
    this.codeRef[i].current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  showExample = () => {
    this.example.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  render() {
    return (
      <PropsContentContainer>
        <Side>
          <ul>
            <li>
              <h4>Props</h4>
              <ul>
                {data.map(({ name }, i) => (
                  <li onClick={() => this.goToProp(i)} key={`codeShortCut${i}`}>
                    <code>{name}</code>
                  </li>
                ))}
              </ul>
              <Button variant="outlined" onClick={this.showExample}>
                Example
              </Button>
            </li>
          </ul>
        </Side>
        <div>
          <p>
            <code>{'<Animate />'}</code> is made to solve a simple React animation problem, which is animates{' '}
            <code>Components</code> from destination A to destination B (with the ability to reverse play).
          </p>

          <h3>Props</h3>
          <ul>
            {data.map(({ name, description }, i) => (
              <li key={`code${i}`} ref={this.codeRef[i]}>
                <code>{name}</code>

                <p>{description}</p>
              </li>
            ))}

            <CommonProps />
          </ul>

          <h3 ref={this.example}>Examples: </h3>
          <p>The following example will animate the component.</p>
          <SyntaxHighlighter language="javascript" style={docco}>
            {example}
          </SyntaxHighlighter>
        </div>

        <div style={{ clear: 'both' }} />
      </PropsContentContainer>
    )
  }
}
