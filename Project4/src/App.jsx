import React from 'react'
import Counter from './component/Counter.jsx'
import ToDoList from './component/ToDoList.jsx';
import Profile from './component/Profile.jsx';
import ShoppingList from './component/ShoppingList.jsx';

const App = () => {
    return (
        <div>
            <Counter />
            <ToDoList />
            <Profile />
            <ShoppingList />
        </div>
    );
};

export default App
