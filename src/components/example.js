import React, { useState } from 'react'

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const dta = useState('bill')
  const [count, setCount] = dta;

  console.log(dta)
  function test() {
    console.log('wtd')
    console.log(setCount)
    console.log(setCount(2));
  }

  console.log(count)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={test}>Click me</button>
    </div>
  )
}
