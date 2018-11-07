import React, { Component } from 'react'
import SyntaxHighlighter from 'react-syntax-highlighter/prism-light'
import { docco } from 'react-syntax-highlighter/styles/hljs'
import { PropsContentContainer, Side } from '../styled/containers'
import data from './props/animateGroupData'
import Button from '@material-ui/core/Button/Button'
import colors from '../styled/colors'

const example = `import react from 'react';
import { Animate, AnimateGroup } from 'react-simple-animate';

const props = {
  startStyle: { opacity: 0 },
  endStyle: { opacity: 1 }
};

export default () => (
  <AnimateGroup play sequences={[
    { sequenceId: 'header', ...props } // play first
    { sequenceId: 'content', ...props, overlaySeconds: 0.1 } // play during header animation and overlay by 0.1s
    { sequenceId: 'footer', ...props, delaySeconds: 0.4 } // play after content with 0.4s seconds delay
  ]}>
    <Animate sequenceId="header" />
    <Animate sequenceId="content" />
    <Animate sequenceId="footer" />
  </AnimateGroup>
);`

const sequenceIndexExample = `import react from 'react';
import { Animate, AnimateGroup } from 'react-simple-animate';

const props = {
  startStyle: { opacity: 0 },
  endStyle: { opacity: 1 }
};

export default () => (
  <AnimateGroup play>
    <Animate {...props} sequenceIndex={0}) />
    <Animate {...props} sequenceIndex={1} />
    <Animate {...props} sequenceIndex={2} />
  </AnimateGroup>
);`

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
            <code>{'<AnimateGroup />'}</code> is made to chain up <code>{'<Animate />'}</code> and{' '}
            <code>{'<AnimateKeyframes />'}</code> in sequences, so animations will play one after another in such order
            which has been defined.
          </p>
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

          <h3 ref={this.example}>Examples: </h3>
          <p>
            Set up animation sequence with <code>sequenceIndex</code>.
          </p>
          <SyntaxHighlighter language="javascript" style={docco}>
            {sequenceIndexExample}
          </SyntaxHighlighter>

          <p>
            Set up animation sequence with <code>sequenceId</code>.
          </p>
          <SyntaxHighlighter language="javascript" style={docco}>
            {example}
          </SyntaxHighlighter>
        </div>
        <div style={{ clear: 'both' }} />
      </PropsContentContainer>
    )
  }
}
