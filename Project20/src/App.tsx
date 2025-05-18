

// import { useState } from 'react';
import ToDoList from './components/ToDoList.tsx';
import UserProfile from './components/UserProfile.tsx';
const App = () => {
    return (

        // const [count, setCount] = useState<number>(0)
        // return (
        //     <div>
        //         <h1>Count</h1>
        //         <p>{count}</p>
        //         <button onClick={() => setCount(count + 1)}>Increment</button>
        //         <button onClick={() => setCount(count - 1)}>Decrement</button>
        //     </div>
        // )
        <div>
            <UserProfile />
            <ToDoList />
        </div >
    )
}

export default App
