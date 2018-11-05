import React from 'react'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import Content from '../components/animateGroup'
import Helmet from "react-helmet";

const AnimateGroup = ({location}) => (
  <Layout location={location}>
    <Helmet
      title={'Animation Sequences'}
      meta={[
        { name: 'description', content: 'Fully controller your React Components animation sequences.' },
      ]}
    >
      <html lang="en" />
    </Helmet>

    <ContentHeader location={location} title="<AnimateGroup />" />
    <Content />
  </Layout>
)

export default AnimateGroup
