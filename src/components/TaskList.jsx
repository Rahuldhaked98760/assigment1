import TaskItem from './TaskItem'

export default function TaskList({ tasks, onUpdate, onDelete }) {
  if (tasks.length === 0)
    return <p className="text-center text-slate-500">No tasks yet.</p>

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white rounded shadow">
        <thead>
          <tr className="bg-slate-200 text-left">
            <th className="p-2">Title</th>
            <th className="p-2">Description</th>
            <th className="p-2">Priority</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map(t => (
            <TaskItem
              key={t.id}
              task={t}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}
