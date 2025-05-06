import { useRef, useEffect } from 'react'

const FocusInput = () => {
    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    }, [])
    return (
        <div>
          <input ref={inputRef} />
          <button onClick={() => inputRef.current.focus()}>click to focus</button>
    </div>
  )
}

export default FocusInput
