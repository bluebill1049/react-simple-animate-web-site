import { PropType } from '../../styled/typography'
import React from 'react'
import commonData from './commonData'

export default [
  {
    name: (
      <>
        play: <PropType>boolean</PropType> = false <i>required</i>
      </>
    ),
    description: (
      <>
        Defaults to <code>false</code>, set to true to start the animation, if set <code>play</code> as{' '}
        <code>true</code> as default prop, then the animation will play right after <code>componentDidMount</code>.
      </>
    ),
  },
  {
    name: (
      <>
        endStyle: <PropType>Object</PropType> <i>required</i>
      </>
    ),
    description: 'Component transition to inline style.',
  },
  {
    name: (
      <>
        startStyle: <PropType>Object</PropType>
      </>
    ),

    description: 'Component initial inline style.',
  },
  {
    name: (
      <>
        {' '}
        onCompleteStyle: <PropType>Object</PropType>
      </>
    ),
    description: (
      <>
        Style to be applied after the animation is completed. Useful when you want to apply <code>display: none</code>{' '}
        after animation is completed.
      </>
    ),
  },
  {
    name: (
      <>
        durationSeconds: <PropType>number</PropType> = 0.3
      </>
    ),
    description: (
      <>
        How long the animation takes in seconds.( if <code>reverseDurationSeconds</code> is not provided, then this
        apply to reverse animation duration seconds as well. )
      </>
    ),
  },
  {
    name: (
      <>
        delaySeconds: <PropType>number</PropType>
      </>
    ),
    description: 'How much delay should apply before animation starts',
  },
  {
    name: (
      <>
        reverseDurationSeconds: <PropType>number</PropType>
      </>
    ),
    description: 'How long the reverse/toggle animation takes in seconds.',
  },
  {
    name: (
      <>
        reverseDelaySeconds: <PropType>number</PropType>
      </>
    ),
    description: `How much delay should apply when reverse/toggle animation.`,
  },
  {
    name: (
      <>
        onComplete: <PropType>Function</PropType>
      </>
    ),
    description: `Call back function after animation complete.`,
  },
  // {
  //   name: (
  //     <>
  //       mount: <PropType>boolean</PropType> = false
  //     </>
  //   ),
  //   description: <>Apply <code>mount</code> as true, will mount component then apply animation.</>,
  // },
  // {
  //   name: (
  //     <>
  //       unMount: <PropType>boolean</PropType> = false
  //     </>
  //   ),
  //
  //   description: <>Apply <code>unMount</code> as true, will unMount component after animation completion.</>,
  // },
  ...commonData,
]
