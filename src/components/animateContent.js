import React, { Component } from 'react'
// import styled from 'styled-components'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import Button from '@material-ui/core/Button'
import { PropsContentContainer } from '../styled/containers'
import data from './props/animateData'
import { Side } from '../styled/containers'
import colors from '../styled/colors'

const example = `import React from 'react';
import { Animate }  from 'react-simple-animate';
import YourComponent from './YourComponent';

export default ({ play, onCompleteCallBack }) => (
  <Animate
    play={play} // set play true to start the animation
    duration={1} // how long is the animation duration
    delay={0.3} // how many delay seconds will apply before the animation start
    start={{ transform: 'translate(0, 0)' }}
    end={{ transform: 'translate(10px, 10px)' }}
    complete={{ display: 'none' }}
    easeType="cubic-bezier(0.445, 0.05, 0.55, 0.95)"
    onComplete={onCompleteCallBack} // call back function when animation is completed
  >
    <YourComponent />
  </Animate>
);
`

// const LinkButton = styled.span`
//   & > button {
//     background: ${colors.primary};
//
//     & span {
//       color: ${colors.white};
//     }
//
//     &:hover {
//       & span {
//         color: ${colors.primary};
//       }
//     }
//   }
// `

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
          <h4>Props</h4>
          <ol>
            {data.map(({ required, name, isAnimateGroup }, i) => {
              const result = (
                <li onClick={() => this.goToProp(i)} key={`codeShortCut${i}`}>
                  <code
                    style={{
                      ...(required ? { borderBottom: `1px solid ${colors.purple}` } : null),
                    }}
                  >
                    {name}
                  </code>
                </li>
              )
              if (isAnimateGroup) {
                return (
                  <span key={`codeShortCut${i}`}>
                    <p>Following props are used by {`<AnimateGroup />`}</p>
                    {result}
                  </span>
                )
              }
              return result
            })}
          </ol>
          <Button variant="outlined" onClick={this.showExample} style={{ marginBottom: 20}}>
            Example
          </Button>
        </Side>
        <div>
          <p>
            <code>{'<Animate />'}</code> component is made to achieve a simple animation task, which is animated{' '}
            <code>Components</code> from destination A to destination B, and with the ability to reverse the animation
            backwards.
          </p>

          <h3 ref={this.example}>Example: </h3>
          <SyntaxHighlighter language="javascript" style={docco}>
            {example}
          </SyntaxHighlighter>

          <h3>Props</h3>
          <ul>
            {data.map(({ name, description, link, code }, i) => (
              <li key={`code${i}`} ref={this.codeRef[i]}>
                <code>{name}</code>

                <p>{description}</p>
                {code}
                {link}
              </li>
            ))}
          </ul>
        </div>

        <div style={{ clear: 'both' }} />
      </PropsContentContainer>
    )
  }
}
