import React from 'react'
import { PropType } from '../../styled/typography'
import Button from '@material-ui/core/Button/Button'
import { navigate } from 'gatsby'

const link = (
  <Button onClick={() => navigate('/animate-group')} variant="outlined">
    Learn Animate Group
  </Button>
)

export default [
  {
    name: (
      <>
        easeType: <PropType>string</PropType> = 'linear'
      </>
    ),

    description: (
      <>
        Easing type refer to{' '}
        <a href="http://easings.net/" rel="noopener noreferrer" target="_blank">
          http://easings.net/
        </a>
      </>
    ),
  },
  {
    isAnimateGroup: true,
    name: (
      <>
        sequenceIndex: <PropType>number</PropType>
      </>
    ),
    description: (
      <>
        This props is used by <code>{`<AnimationGroup/>`}</code>, which provides unique array index to associate with{' '}
        <code>{`<AnimationGroup/>`}</code> sequences.
      </>
    ),
    link,
  },
  {
    name: (
      <>
        sequenceId: <PropType>string | number</PropType>
      </>
    ),
    description: (
      <>
        This props is used by <code>{`<AnimationGroup/>`}</code>, which provides unique id to associate with{' '}
        <code>{`<AnimationGroup/>`}</code> sequences.
      </>
    ),
    link,
  },
  {
    name: (
      <>
        overlaySeconds: <PropType>number</PropType>
      </>
    ),
    description: (
      <>
        This props is used by <code>{`<AnimationGroup/>`}</code>, When animation need to play ahead, which overlay on
        top of the previous animation by seconds.
      </>
    ),
    link,
  },
]
