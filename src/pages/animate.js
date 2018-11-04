import React from 'react'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import Content from '../components/animateContent'
import Helmet from "react-helmet";

const Animate = ({ location }) => (
  <Layout location={location}>
    <Helmet
      title={`React Simple Animate - <Animate /> component`}
      meta={[
        { name: 'description', content: 'React animation component' },
        {
          name:
            'react animation animate transition-animation animate-css animation-controller animation-sequence keyframes-animation',
          content: 'sample, something',
        },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <ContentHeader location={location} title="<Animate />" />
    <Content />
  </Layout>
)

export default Animate
