import React from 'react'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import { ContentContainer } from '../styled/containers'
import Helmet from 'react-helmet'
import { Link } from 'gatsby'

const AnimateGroup = ({ location }) => (
  <Layout location={location}>
    <Helmet
      title={'Hooks - useAnimate and useAnimateKeyframes with react simple animate'}
      meta={[{ name: 'description', content: 'React animation basics' }]}
    >
      <html lang="en" />
    </Helmet>
    <ContentHeader location={location} title="Basics" />

    <ContentContainer>
      <h3>useAnimate</h3>

      <p>
        This hook share the same functionality and props as{' '}
        <Link to="/animate">
          <code>{`<Animate />`}</code>
        </Link>
        .
      </p>

      <iframe
        title="react simple animate with useAnimate"
        src="https://codesandbox.io/embed/useanimate-iuui5"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h3>useAnimateKeyframes</h3>

      <p>
        This hook share the same functionality and props as{' '}
        <Link to="/animate-keyframes">
          <code>{`<AnimateKeyframes />`}</code>
        </Link>
        .
      </p>

      <iframe
        title="react simple animate with useAnimateKeyframes"
        src="https://codesandbox.io/embed/9q2kypmrrp"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h3>useAnimateGroup</h3>
      <p>
        This hook share the same functionality and props as{' '}
        <Link to="/animate-group">
          <code>{`<AnimateGroup />`}</code>
        </Link>
        .
      </p>


      <iframe
        title="react simple animate with useAnimateGroup"
        src="https://codesandbox.io/embed/r4xpko5pwp"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </ContentContainer>
  </Layout>
)

export default AnimateGroup
