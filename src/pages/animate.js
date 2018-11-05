import React from 'react'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import Content from '../components/animateContent'
import Helmet from "react-helmet";

const Animate = ({ location }) => (
  <Layout location={location}>
    <Helmet
      title="Animate Component"
      meta={[
        { name: 'description', content: 'Simple React animation from style A to B' },
      ]}
    >
      <html lang="en" />
    </Helmet>
    <ContentHeader location={location} title="<Animate />" />
    <Content />
  </Layout>
)

export default Animate
