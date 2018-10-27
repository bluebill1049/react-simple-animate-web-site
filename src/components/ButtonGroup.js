// @flow
import React from 'react'
import { navigate } from 'gatsby';
import Button from '@material-ui/core/Button/Button'
import { ButtonWrapper } from '../styled/buttons'

export default function ButtonGroup({ buttonText, path, onClick }) {
  return (
    <ButtonWrapper onClick={onClick}>
      <Button variant="outlined">{buttonText}</Button>
      <Button onClick={() => navigate(path)}>Learn more...</Button>
    </ButtonWrapper>
  )
}
