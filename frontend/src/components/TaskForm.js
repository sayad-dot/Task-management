import React, { useState } from 'react';
import axios from '../services/api';

const TaskForm = ({ onTaskAdded }) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState('');

  const addTask = async (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      setError('Task title is required');
      return;
    }
    try {
      const response = await axios.post('/tasks', { title });
      setTitle(''); // Clear the input field
      setError(''); // Reset error message
      onTaskAdded(response.data); // Update the parent component state with the new task
    } catch (err) {
      setError('Failed to add task. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={addTask}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Task title"
          required
        />
        <button type="submit">Add Task</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
    </div>
  );
};

export default TaskForm;
