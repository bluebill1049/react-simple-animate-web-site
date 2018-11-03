import React from 'react'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import { ContentContainer } from '../styled/containers'

const AnimateGroup = ({ location }) => (
  <Layout location={location}>
    <ContentHeader title="Advanced" />

    <ContentContainer>
      <h3>Animate Components in sequences</h3>

      <p>
        React simple animation provide ability to chain up your animations in sequences, the following example will
        animation components one after another, which refer to <code>sequenceIndex</code>.
      </p>

      <iframe
        title="react simple animate with animation sequences"
        src="https://codesandbox.io/embed/kk9jo0m117"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />

      <h3>Add or remove components</h3>

      <p>React simple animation also support transition on adding or remove components.</p>

      <iframe
        title="react simple animate on adding or removing animation"
        src="https://codesandbox.io/embed/kx9p504k97"
        style={{ width: '100%', height: '500px', border: 0, borderRadius: '4px', overflow: 'hidden' }}
        sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
      />
    </ContentContainer>
  </Layout>
)

export default AnimateGroup
