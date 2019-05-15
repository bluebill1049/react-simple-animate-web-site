import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import { PropsContentContainer, Side } from '../styled/containers'
import data from './props/animateKeyframesData'
import Button from '@material-ui/core/Button/Button'
import colors from '../styled/colors'

const exmaple = `import React from 'react';
import { AnimateKeyframes }  from 'react-simple-animate';
import YourComponent from './YourComponent';

export default ({ children, play }) => (
  <AnimateKeyframes 
    play 
    delay={1}
    duration={10}
    iterationCount={3}
    direction="alternative"
    keyframes={[
      'transform: translateY(0)',
      'transform: translateY(10px)',
    ]} 
  >
    <YourComponent />
  </AnimateKeyframes>
)};
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
          <Button variant="outlined" onClick={this.showExample}>
            Example
          </Button>
        </Side>
        <div>
          <p>
            <code>{'<AnimateKeyframes />'}</code> is implemented according to{' '}
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations/Using_CSS_animations"
              target="_blank"
              rel="noopener noreferrer"
            >
              CSS animation
            </a>{' '}
            specification. It's best to use for infinite animation, or animation which can be paused and resumed.
          </p>

          <h3 ref={this.example}>Example: </h3>
          <p>The following example will animate the component to move at X coordinate 3 times.</p>
          <SyntaxHighlighter language="javascript" style={docco}>
            {exmaple}
          </SyntaxHighlighter>

          <h3>Props</h3>
          <ul>
            {data.map(({ customised, name, description, link, code }, i) => (
              <li key={`code${i}`} ref={this.codeRef[i]}>
                <code>{name}</code>

                {customised ? customised : <p>{description}</p>}
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
