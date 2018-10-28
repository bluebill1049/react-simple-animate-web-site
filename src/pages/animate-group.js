import React from 'react'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import Content from '../components/animateGroup'

const AnimateGroup = ({location}) => (
  <Layout location={location}>
    <ContentHeader title="<AnimateGroup />" />
    <Content />
  </Layout>
)

export default AnimateGroup
