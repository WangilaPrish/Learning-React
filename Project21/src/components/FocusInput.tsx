import { useRef } from 'react'

const FocusInput = () => {

    const inputRef = useRef<HTMLInputElement>(null)

    const handleFocus = () => {
        if (inputRef.current) {
            inputRef.current.focus()
        }
    }
    return (
        <div>
            <input ref={inputRef} name='Input Focus' placeholder='Click button to focus'></input>
            <button onClick={handleFocus}>Click me to focus</button>
        </div>
    )
}

export default FocusInput
