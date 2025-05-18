import { useState } from 'react'

const ToDoList = () => {
    const [todos, setTodos] = useState<string[]>([])
    const [inputValue, setInputValue] = useState<string>('')

    return (
        <div>
            <h1>ToDo List</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
            <input
                type="text"
                placeholder="Add a new todo"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => {
                    if (e.key === 'Enter' && inputValue.trim() !== '') {
                        setTodos([...todos, inputValue.trim()]);
                        setInputValue('');
                    }
                }}
            />
            <button
                onClick={() => {
                    if (inputValue.trim() !== '') {
                        setTodos([...todos, inputValue.trim()]);
                        setInputValue('');
                    }
                }}
            >
                Add Todo
            </button>
            <button
                onClick={() => {
                    if (inputValue.trim() !== '') {
                        setTodos(todos.filter(todo => todo !== inputValue.trim()));
                        setInputValue('');
                    }
                }}
            >
                Remove Todo
            </button>
        </div>
    )
}

export default ToDoList
