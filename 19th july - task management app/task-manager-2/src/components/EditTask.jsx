
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function EditTask() {
  const [task, setTask] = useState({ title: '', description: '', date: '' });
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3001/tasks/${id}`).then(res => {
      setTask(res.data);
    });
  }, [id]);

  const handleChange = e => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:3001/tasks/${id}`, task);
    navigate('/');
  };

  return (
    <main>
      <h2>Edit Task</h2>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input type="text" name="title" value={task.title} onChange={handleChange} required />
        <label>Description</label>
        <textarea name="description" value={task.description} onChange={handleChange}></textarea>
        <label>Due Date</label>
        <input type="date" name="date" value={task.date} onChange={handleChange} />
        <button type="submit">Update Task</button>
      </form>
    </main>
  );
}

export default EditTask;
