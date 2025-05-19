import { useRef, useState } from 'react'

const ContactForm = () => {

    const [name, setName] = useState<string>('')
    const [email, setEmail] = useState<string>('')

    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)

    const saveData = (e: React.FormEvent) => {
        e.preventDefault()
        if (nameRef.current) {
            setName(nameRef.current.value)
        }
        if (emailRef.current) {
            setEmail(emailRef.current.value)
        }
    }

    return (
        <form onSubmit={saveData}>
            <input
                ref={nameRef}
                placeholder='Enter your name'
                defaultValue={name}
            />
            <input
                ref={emailRef}
                placeholder='Enter your email'
                defaultValue={email}
            />
            <button type='submit'>Submit</button>
            {/* Display the state values to ensure they're read */}
            <div>Name: {name}</div>
            <div>Email: {email}</div>
        </form>
    )
}

export default ContactForm
