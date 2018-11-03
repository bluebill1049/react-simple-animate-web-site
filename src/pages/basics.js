import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import colors from '../styled/colors'
import { ContentContainer } from '../styled/containers';

const InlineCode = styled.code`
  display: block;
  padding: 10px;
  background: ${colors.secondary};
  color: ${colors.white};
  margin-bottom: 30px;
`

const AnimateGroup = ({ location }) => (
  <Layout location={location}>
    <ContentHeader title="Basics" />

    <ContentContainer>
      <h3>Motivation</h3>

      <p>
        React Animation is always not that easy, there are plenty libraries out, but most of them required to learn the
        way doing things. <code>React Simple Animate</code> focuses on inline style and using standard CSS animation,
        which provide great experience for developers to get on React animation easier and leverage their existing
        knowledge.
      </p>

      <p>The package provided some of the key features below:</p>

      <ul>
        <li>Animation from inline style A to B.</li>
        <li>Support CSS animation keyframes.</li>
        <li>Chain up animation sequences.</li>
        <li>Tiny size without other dependency.</li>
      </ul>

      <h3>Installation</h3>
      <p>
        Installing <code>react-simple-animate</code> only takes a single command and you're ready to roll:
      </p>
      <InlineCode>npm install --S react-simple-animate</InlineCode>

      <h3>Getting Started</h3>

      <p>
        The following example demonstrate doing basic animation from style A to B, which is perfect to use{' '}
        <code>{`<Animate />`}</code>, by declare <code>startStyle</code>, <code>endStyle</code> and a peace of state to
        control the <code>play</code> animation.
      </p>

      <iframe
        title="Animate inline style"
        src="https://codesandbox.io/embed/v1q4p2q327"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h3>Control animation speed</h3>

      <p>
        Easily adjust the animation speed with duration, the following example will adjust the animation speed duration
        to 1 second and also delay the animation on start.
      </p>

      <iframe
        title="Animate with speed control"
        src="https://codesandbox.io/embed/r7q1pj660p"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h3>Animate with CSS @keyframes</h3>
      <p>
        The following example demonstrate how to easily apply CSS <code>@keyframes</code> knowledge to React
        component, by declare you keyframes animation in an <code>array</code> of style and duration seconds to play.
      </p>

      <iframe
        title="Animate with CSS @keyframes"
        src="https://codesandbox.io/embed/o47j97mxk5"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </ContentContainer>
  </Layout>
)

export default AnimateGroup
