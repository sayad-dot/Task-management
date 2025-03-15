import React, { useState, useEffect } from 'react';
import axios from '../services/api';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      const res = await axios.get('/tasks');
      setTasks(res.data);
    };
    fetchTasks();
  }, []);

  return (
    <ul>
      {tasks.map((task) => (
        <li key={task._id}>{task.title}</li>
      ))}
    </ul>
  );
}

export default TaskList;
