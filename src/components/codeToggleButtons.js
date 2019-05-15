import React from 'react'
import styled from 'styled-components'
import colors from '../styled/colors'

const ButtonWrapper = styled.div`
  position: absolute;
  right: 20px;
  border-radius: 3px;

  & button {
    appearance: none;
    padding: 5px 15px;
    border: 1px solid ${colors.primary};

    &:first-child {
      border-right: 0;
    }
  }
`

const Button = styled.button`
  ${props =>
    props.active
      ? `
    background: ${colors.primary};
    color: white;
  `
      : null};
`

export default function CodeToggleButton({ mode, setMode }) {
  return (
    <ButtonWrapper>
      <Button
        style={{
          borderTopLeftRadius: 5,
          borderBottomLeftRadius: 5,
        }}
        active={mode === 'component'}
        onClick={() => setMode('component')}
      >
        Component
      </Button>
      <Button
        style={{
          borderTopRightRadius: 5,
          borderBottomRightRadius: 5,
        }}
        active={mode === 'hook'}
        onClick={() => setMode('hook')}
      >
        Hook
      </Button>
    </ButtonWrapper>
  )
}
