import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import colors from '../styled/colors'
import { ContentContainer } from '../styled/containers'
import Helmet from 'react-helmet'

const InlineCode = styled.code`
  display: block;
  padding: 10px;
  background: ${colors.secondary};
  color: ${colors.white};
  margin-bottom: 30px;
`

const AnimateGroup = ({ location }) => (
  <Layout location={location}>
    <Helmet title={'Basics'} meta={[{ name: 'description', content: 'React animation basics' }]}>
      <html lang="en" />
    </Helmet>
    <ContentHeader location={location} title="Basics" />

    <ContentContainer>
      <h3>Motivation</h3>

      <p>
        React Animation is always not that easy. However, there are plenty of libraries out there, but most of them
        required you to learn the way doing things, and package size are not always small.{' '}
        <code>React Simple Animate</code> focuses on standard CSS animation to leverage most of your existing knowledge
        on styling, which aims to provide simple and great experience to get you on board with React animation.
      </p>

      <p>The package provided some of the key features below:</p>

      <ul>
        <li>Animation from inline style A to B.</li>
        <li>Support CSS animation keyframes.</li>
        <li>Chain up animation sequences.</li>
        <li>Tiny size without other dependencies.</li>
      </ul>

      <h3>Installation</h3>
      <p>
        Installing <code>react-simple-animate</code> only takes a single command and you're ready to roll:
      </p>
      <InlineCode>npm install --S react-simple-animate</InlineCode>

      <h3>Getting Started</h3>

      <p>
        The following example demonstrates doing basic animation from style <b>A</b> to <b>B</b>, which is perfect to
        use <code>{`<Animate />`}</code> Component, by declaring <code>startStyle</code>, <code>endStyle</code> and a
        local state to control the <code>play</code> animation.
      </p>

      <iframe
        title="Animate inline style"
        src="https://codesandbox.io/embed/v1q4p2q327"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h3>Control React animation speed</h3>

      <p>
        React Simple Animate allows you easily adjust the animation speed with duration. The following example will
        adjust the animation speed duration to 1 second, and also delay the animation by 1 second on start.
      </p>

      <iframe
        title="Animate with speed control"
        src="https://codesandbox.io/embed/r7q1pj660p"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h3>Animate with CSS @keyframes</h3>
      <p>
        The following example demonstrate how to easily apply CSS <code>@keyframes</code> animation on your React
        component.
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
