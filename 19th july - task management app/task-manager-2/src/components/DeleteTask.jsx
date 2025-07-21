import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

function DeleteTask() {
  const { id } = useParams();
  const navigate = useNavigate(); 
  const [task, setTask] = useState(null); 

  useEffect(() => {
    axios.get(`http://localhost:3001/tasks/${id}`)
      .then((res) => setTask(res.data))
      .catch(() => navigate('/')); 
  }, [id, navigate]);

  const handleDelete = async () => {
    await axios.delete(`http://localhost:3001/tasks/${id}`);
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <main>
      <h2>Delete Task</h2>
      {task ? (
        <>
          <p>Are you sure you want to delete the task <strong>"{task.title}"</strong>?</p>
          <button onClick={handleDelete} style={{ marginRight: '1rem' }}>
            Yes, Delete
          </button>
          <button onClick={handleCancel}>
            Cancel
          </button>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </main>
  );
}

export default DeleteTask;
