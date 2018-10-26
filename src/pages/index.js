import React from 'react'
import { Animate } from 'react-simple-animate'
import Layout from '../components/layout'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
  background: linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%);
  width: 100%;
  height: 100vh;
`

const IndexPage = () => (
  <Layout>
    <HeaderWrapper>
      <h1>React Simple Animate</h1>
    </HeaderWrapper>
  </Layout>
)

export default IndexPage
