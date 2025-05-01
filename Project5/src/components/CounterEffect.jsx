import React from 'react'
import { useEffect, useState } from 'react'

const CounterEffect = () => {
    const [count, setCount] = useState(0)

    const addCount = () => {
        setCount(count + 1)
    }
    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count]);
  return (
      <div>
          <h1>Counter Effect</h1>
          <p>Count: {count}</p>
          <button onClick={addCount}>Increment by One</button>
      </div>
  )
}

export default CounterEffect
