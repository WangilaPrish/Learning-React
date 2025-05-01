import React from 'react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)
    const addCount = () => {
        setCount(count + 1)
    }
  return (
      <div>
          <h1>Counter: { count }</h1>
          <button onClick={addCount}>+</button>
      </div>
  )
}

export default Counter
