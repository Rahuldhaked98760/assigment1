import { useState, useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'

const STORAGE_KEY = 'task-manager-tasks'

export default function App() {
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY)
    return saved ? JSON.parse(saved) : []
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  }, [tasks])

  const addTask    = task      => setTasks(t => [...t, task])
  const deleteTask = id        => setTasks(t => t.filter(x => x.id !== id))
  const updateTask = updated   => setTasks(t => t.map(x => x.id === updated.id ? updated : x))

  return (
    <div className="min-h-screen bg-slate-100 p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Task Manager</h1>

      <TaskForm onAdd={addTask} />

      <TaskList
        tasks={tasks}
        onDelete={deleteTask}
        onUpdate={updateTask}
      />
    </div>
  )
}
