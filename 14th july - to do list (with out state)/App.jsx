import React from 'react';

const todos = [
  {
    id: 1,
    title: "Finish report",
    description: "Monthly financial report",
    category: "Work",
    completed: true,
  },
  {
    id: 2,
    title: "Team meeting",
    description: "Sync with dev team",
    category: "Work",
    completed: false,
  },
  {
    id: 3,
    title: "Buy groceries",
    description: "Milk, eggs, and bread",
    category: "Personal",
    completed: false,
  },
  {
    id: 4,
    title: "Gym",
    description: "Leg day workout",
    category: "Personal",
    completed: true,
  },
  {
    id: 5,
    title: "Read book",
    description: "Finish 'Atomic Habits'",
    category: "Hobby",
    completed: false,
  },
  {
    id: 6,
    title: "Painting session",
    description: "Try new watercolor technique",
    category: "Hobby",
    completed: true,
  },
];

function App() {
  const categories = [...new Set(todos.map(todo => todo.category))];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial' }}>
      <h1>Grouped To-Do List</h1>
      {categories.map(category => (
        <div key={category} style={{ marginBottom: '2rem' }}>
          <h2>{category}</h2>
          {todos
            .filter(todo => todo.category === category)
            .map(todo => (
              <div key={todo.id} style={{ marginLeft: '1rem', marginBottom: '1rem' }}>
                <span style={{ fontSize: '1.2rem' }}>
                  {todo.completed ? '✅' : '❌'} {todo.title}
                </span>
                <div style={{ fontStyle: 'italic', color: '#555' }}>{todo.description}</div>
              </div>
            ))}
        </div>
      ))}
    </div>
  );
}

export default App;
