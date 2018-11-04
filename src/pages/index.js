import React from 'react'
import Layout from '../components/layout'
import AnimatePanel from '../components/home/animatePanel'
import AnimateGroupPanel from '../components/home/animateGroupPanel'
import AnimateKeyframesPanel from '../components/home/animateKeyframesPanel'
import Header from '../components/header'
import Features from '../components/home/features'
import Helmet from 'react-helmet'

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <Helmet
      title={'React Simple Animate - UI Animation made simple'}
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

    <Header location={location} />

    <Features />

    <AnimatePanel />

    <AnimateKeyframesPanel />

    <AnimateGroupPanel />
  </Layout>
)

export default IndexPage
