// @flow
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  padding: 20px;
  position: relative;
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
