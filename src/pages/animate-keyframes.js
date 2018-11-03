import React from 'react'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import Content from '../components/animateKeyframesContent'

const AnimateKeyframes = ({ location }) => (
  <Layout location={location}>
    <ContentHeader location={location} title="<AnimateKeyframes />" />
    <Content />
  </Layout>
)

export default AnimateKeyframes
