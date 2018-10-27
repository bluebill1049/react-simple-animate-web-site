import React, { useState, useEffect } from 'react'

export default function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0)

  console.log(count)

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => {
        console.log('hit')
        console.log(setCount())
        setCount(() => count + 1)
      }}>Click me</button>
    </div>
  )
}
