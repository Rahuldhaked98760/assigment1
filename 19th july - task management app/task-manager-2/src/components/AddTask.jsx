
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function AddTask() {
  const [task, setTask] = useState({ title: '', description: '', date: '' });
  const navigate = useNavigate();

  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.post('http://localhost:3001/tasks', task);
    navigate('/');
  };

  return (
    <main>
      <h2>Add New Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" onChange={handleChange} required />
        <label>Description</label>
        <textarea name="description" onChange={handleChange}></textarea>
        <label>Due Date</label>
        <input type="date" name="date" onChange={handleChange} />
        <button type="submit">Add Task</button>
      </form>
    </main>
  );
}

export default AddTask;
