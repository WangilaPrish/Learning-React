import React from 'react'
import { useState } from 'react'

const Profile = () => {

    const [name, setName] = useState('')
    const [age, setAge] = useState('')
  return (
      <div>
          <h1>Profile</h1>
          <p>Name: {name}</p>
          <p>Age: {age}</p>
          <input type="text" placeholder="Enter your name" onChange={(e) => setName(e.target.value)} />
          <input type="text" placeholder="Enter your age" onChange={(e) => setAge(e.target.value)} />
          <button onClick={() => { localStorage.setItem('profileName', name); localStorage.setItem('profileAge', age); }}>
              Update Details
              </button>
      </div>
  )
}

export default Profile
