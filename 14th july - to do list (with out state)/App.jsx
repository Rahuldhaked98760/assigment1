
const todoItems = [
  { id: 1, title: "Finish report", 
    description: "Monthly financial report", 
    category: "Work", completed: true },
  { id: 2, title: "Team meeting", 
    description: "Sync with dev team", 
    category: "Work", completed: false },
  { id: 3, title: "Buy groceries", 
    description: "Milk, eggs, and bread", 
    category: "Personal", completed: false },
  { id: 4, title: "Gym", 
    description: "Leg day workout", 
    category: "Personal", completed: true },
  { id: 5, title: "Read book", 
    description: "Finish 'Atomic Habits'", 
    category: "Hobby", completed: false },
  { id: 6, title: "Painting session", 
    description: "Try new watercolor technique", 
    category: "Hobby", completed: true }
];

const categories = [...new Set(todoItems.map(item => item.category))];

return (
  <div>
    <h1>Grouped To-Do List</h1>
    {categories.map(category => (
      <div key={category}>
        <h2>{category}</h2>
        {todoItems.filter(item => item.category === category)
         .map(item => (
          <div key={item.id}>
            {item.completed ? '✅' : '❌'} {item.title}
            <p style={{ fontSize: 'smaller', 
                        fontStyle: 'italic' }}>
              {item.description}
            </p>
          </div>
        ))}
      </div>
    ))}
  </div>
);
