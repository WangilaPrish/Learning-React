import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState('');

  const addTask = (e) => {
    e.preventDefault();
    if (text) {
      setTasks([...tasks, text]);
      setText('');
    }
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add a new task"
        />
        <button type="submit">Add</button>
      </form>

      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
