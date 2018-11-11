import React from 'react'
import Layout from '../components/layout'
import ContentHeader from '../components/contentHeader'
import Content from '../components/animateKeyframesContent'
import Helmet from "react-helmet";

const AnimateKeyframes = ({ location }) => (
  <Layout location={location}>
    <Helmet
      title={'Animate Keyframes - animate component with CCS keyframes'}
      meta={[
        { name: 'description', content: 'Easily animate keyframes in React Components' },
      ]}
    >
      <html lang="en" />
    </Helmet>

    <ContentHeader location={location} title="<AnimateKeyframes />" />
    <Content />
  </Layout>
)

export default AnimateKeyframes
