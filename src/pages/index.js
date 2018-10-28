import React from 'react'
import Layout from '../components/layout'
import AnimatePanel from '../components/home/animatePanel'
import AnimateGroupPanel from '../components/home/animateGroupPanel'
import AnimateKeyframesPanel from '../components/home/animateKeyframesPanel'
import Header from '../components/header'
import Features from '../components/home/features'

const IndexPage = ({location}) => (
  <Layout location={location}>
    <Header />

    <Features />

    <AnimatePanel />

    <AnimateKeyframesPanel />

    <AnimateGroupPanel />
  </Layout>
)

export default IndexPage
