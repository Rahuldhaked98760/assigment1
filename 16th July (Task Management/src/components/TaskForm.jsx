import { useState } from 'react'
import { v4 as uuid } from 'uuid'

const priorities = ['Low', 'Medium', 'High']

export default function TaskForm({ onAdd }) {
  const [title,       setTitle]       = useState('')
  const [description, setDescription] = useState('')
  const [priority,    setPriority]    = useState('Low')

  const handleSubmit = e => {
    e.preventDefault()
    if (!title.trim()) return

    onAdd({
      id: uuid(),
      title,
      description,
      priority,
      status: 'Pending',
    })

    setTitle('')
    setDescription('')
    setPriority('Low')
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 grid gap-2 md:grid-cols-4">
      <input
        className="p-2 border rounded col-span-1 md:col-span-2"
        placeholder="Task title"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required
      />
      <input
        className="p-2 border rounded"
        placeholder="Description (optional)"
        value={description}
        onChange={e => setDescription(e.target.value)}
      />
      <select
        className="p-2 border rounded"
        value={priority}
        onChange={e => setPriority(e.target.value)}
      >
        {priorities.map(p => <option key={p}>{p}</option>)}
      </select>
      <button className="bg-blue-600 text-white rounded p-2 hover:bg-blue-700">
        Add
      </button>
    </form>
  )
}
