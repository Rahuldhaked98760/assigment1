import React, { useState } from 'react';

function App() {
  const [input, setInput] = useState('');       
  const [todos, setTodos] = useState([]);       

  const handleAddTodo = () => {
    if (input.trim() === '') return; 
    setTodos([...todos, input]);     
    setInput('');                    
  };

  return (
    <div style={{ maxWidth: '500px', margin: '40px auto', fontFamily: 'Arial, sans-serif' }}>
      <h1>Simple To-Do List</h1>

      { }
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="Type your task..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{ flex: 1, padding: '10px', fontSize: '16px' }}
        />
        <button onClick={handleAddTodo} style={{ padding: '10px 20px', fontSize: '16px' }}>
          Add
        </button>
      </div>

      {}
      <ul style={{ paddingLeft: '20px' }}>
        {todos.map((todo, index) => (
          <li key={index} style={{ fontSize: '18px', marginBottom: '8px' }}>
            {todo}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
