import { useState } from 'react'

const statuses   = ['Pending', 'In Progress', 'Completed']
const priorities = ['Low', 'Medium', 'High']

export default function TaskItem({ task, onUpdate, onDelete }) {
  const [edit, setEdit] = useState(false)
  const [form, setForm] = useState({ ...task })

  const change = e => setForm({ ...form, [e.target.name]: e.target.value })
  const save   = () => { onUpdate(form); setEdit(false) }
  const cancel = () => { setForm({ ...task }); setEdit(false) }

  return (
    <tr className="border-t">
      <td className="p-2">
        {edit
          ? <input name="title" value={form.title} onChange={change}
              className="border rounded p-1 w-full" />
          : task.title}
      </td>
      <td className="p-2">
        {edit
          ? <input name="description" value={form.description} onChange={change}
              className="border rounded p-1 w-full" />
          : task.description}
      </td>
      <td className="p-2">
        {edit
          ? <select name="priority" value={form.priority} onChange={change}
              className="border rounded p-1">
              {priorities.map(p => <option key={p}>{p}</option>)}
            </select>
          : task.priority}
      </td>
      <td className="p-2">
        {edit
          ? <select name="status" value={form.status} onChange={change}
              className="border rounded p-1">
              {statuses.map(s => <option key={s}>{s}</option>)}
            </select>
          : task.status}
      </td>
      <td className="p-2 space-x-2">
        {edit ? (
          <>
            <button onClick={save}
              className="bg-green-600 text-white rounded px-2 py-1 hover:bg-green-700">
              Save
            </button>
            <button onClick={cancel}
              className="bg-gray-300 rounded px-2 py-1 hover:bg-gray-400">
              Cancel
            </button>
          </>
        ) : (
          <>
            <button onClick={() => setEdit(true)}
              className="bg-yellow-500 text-white rounded px-2 py-1 hover:bg-yellow-600">
              Edit
            </button>
            <button onClick={() => onDelete(task.id)}
              className="bg-red-600 text-white rounded px-2 py-1 hover:bg-red-700">
              Delete
            </button>
          </>
        )}
      </td>
    </tr>
  )
}
