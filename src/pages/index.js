import React from 'react'
import Layout from '../components/layout'
import AnimatePanel from '../components/animatePanel'
import AnimateGroupPanel from '../components/AnimateGroupPanel'
import AnimateKeyframesPanel from '../components/animateKeyframesPanel'
import Header from '../components/header'

const IndexPage = () => (
  <Layout>
    <Header />

    <AnimatePanel />

    <AnimateKeyframesPanel />

    <AnimateGroupPanel />
  </Layout>
)

export default IndexPage
