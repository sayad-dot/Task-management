import React, { useState } from 'react';
import axios from '../services/api';

function TaskForm() {
  const [title, setTitle] = useState('');

  const addTask = async (e) => {
    e.preventDefault();
    await axios.post('/tasks', { title });
    window.location.reload(); // Quick way to refresh tasks
  };

  return (
    <form onSubmit={addTask}>
      <input type="text" onChange={(e) => setTitle(e.target.value)} placeholder="Task title" />
      <button type="submit">Add Task</button>
    </form>
  );
}

export default TaskForm;
