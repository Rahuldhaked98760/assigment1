import React, { useState } from 'react';

function TodoApp() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (input.trim() !== '') {
      setTodos([...todos, input]);
      setInput('');
    }
  };

  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Simple To-Do List</h1>
      
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter a to-do item"
        style={{ padding: '10px', width: '70%' }}
      />
      <button
        onClick={handleAdd}
        style={{ padding: '10px 15px', marginLeft: '10px' }}
      >
        Add
      </button>

      <ul style={{ textAlign: 'left', marginTop: '20px' }}>
        {todos.map((item, index) => (
          <li key={index} style={{ padding: '5px 0' }}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoApp;

