import React from 'react'
import styled from 'styled-components'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import colors from '../styled/colors'
import { ContentContainer } from '../styled/containers'
import Helmet from 'react-helmet'
import { Link } from '@reach/router'

const InlineCode = styled.code`
  display: block;
  padding: 10px;
  background: ${colors.secondary};
  color: ${colors.white};
  margin-bottom: 30px;
`

const AnimateGroup = ({ location }) => (
  <Layout location={location}>
    <Helmet
      title={'Basics - Get started with React Animation'}
      meta={[{ name: 'description', content: 'React animation basics' }]}
    >
      <html lang="en" />
    </Helmet>
    <ContentHeader location={location} title="Basics" />

    <ContentContainer>
      <h3>Motivation</h3>

      <p>
        Animation with React can be difficult, there are a number of libraries out there that attempt to solve this but
        most of them require deep learning, specific configuration and can be a large dependency for your project.{' '}
        <code>React Simple Animate</code> focuses on standard CSS animation leveraging existing knowledge of styling and
        aims to provide a simple and great experience to get you on board with React animation.
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
        The following example demonstrates basic animation from style <b>A</b> to <b>B</b> with{' '}
        <Link to="/animate">
          <code>{`<Animate />`}</code>
        </Link>{' '}
        Component, by declaring <code>start</code>, <code>end</code> props with a local state to control the{' '}
        <code>play</code> animation.
      </p>

      <iframe
        title="Animate inline style"
        src="https://codesandbox.io/embed/v1q4p2q327?view=editor"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h3>Control React animation speed</h3>

      <p>
        React Simple Animate allows you easily adjust the animation speed with duration. The following example will
        adjust the animation speed duration to 1 second and delay by 0.3 seconds.
      </p>

      <iframe
        title="Animate with speed control"
        src="https://codesandbox.io/embed/control-duration-3k2i9?view=editor"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h3>Animation with CSS keyframes</h3>

      <p>
        You can easily apply CSS keyframes animation in <Link to="/animate-keyframes">{`<AnimateKeyframes />`}</Link>{' '}
        Component by supply an array of styles.
      </p>

      <iframe
        title="Apply complete style after animation is finished"
        src="https://codesandbox.io/embed/4jpon7pvw9?view=editor"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </ContentContainer>
  </Layout>
)

export default AnimateGroup
