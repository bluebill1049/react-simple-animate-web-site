// @flow
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  position: relative;
  
  & pre {
    padding-top: 50px !important;
    
    @media (min-width: 768px) {
      
    padding-top: 10px !important;
    }
  }

  @media (min-width: 1024px) {
    max-width: 800px;
    margin: 0 auto;

    & h3,
    p {
      text-align: center;
    }

    & pre {
      padding-left: 30px !important;
    }
  }
`

const H3 = styled.h3`
  margin-bottom: 15px;
`

export default function codeContainer({ title, description, children }) {
  return (
    <Container>
      <H3>{title}</H3>
      <p>{description}</p>

      {children}
    </Container>
  )
}
