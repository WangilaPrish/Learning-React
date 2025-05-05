import React from 'react'
import { useReducer } from 'react'
import { reducer } from './counterReducer'

const initialState = { count: 0 }

const Counter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
            <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
        </div>
  )
}

export default Counter
