import React, { useState } from 'react';
import './TodoList.css';

function TodoList() {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: task }]);
    setTask("");
  };

  return (
    <div className="todo-container">
      <h2>Todo List</h2>
      <div className="input-group">
        <input
          type="text"
          value={task}
          onChange={handleChange}
          placeholder="Enter a task"
        />
        <button onClick={addTask}>Add</button>
      </div>
      <ul>
        {tasks.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
