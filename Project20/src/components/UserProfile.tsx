import { useState } from 'react'

const UserProfile = () => {

    const [user, setUser] = useState<string>('')
    const [age, setAge] = useState<number>()
    return (
        <div>
            <ul>
                <li>Name: {user}</li>
                <li>Age: {age}</li>
            </ul>
            <input type="text" placeholder="Name" onChange={(e) => setUser(e.target.value)} />
            <input type="number" placeholder="Age" onChange={(e) => setAge(Number(e.target.value))} />

        </div>
    )
}

export default UserProfile
