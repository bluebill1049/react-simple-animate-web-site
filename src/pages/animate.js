import React from 'react'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import Content from '../components/animateContent'

const Animate = ({ location }) => (
  <Layout location={location}>
    <ContentHeader location={location} title="<Animate />" />
    <Content />
  </Layout>
)

export default Animate
