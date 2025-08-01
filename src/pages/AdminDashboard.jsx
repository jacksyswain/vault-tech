import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../features/tasks/taskSlice';
import { logout } from '../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function AdminDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const tasks = useSelector((state) => state.tasks.tasks);

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [assignedTo, setAssignedTo] = useState('tech@example.com');

  const handleAddTask = () => {
    if (title && description) {
      dispatch(addTask({ title, description, assignedTo }));
      setTitle('');
      setDescription('');
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧑‍💼 Admin Dashboard</h1>

      {/* Add Task Form */}
      <div className="bg-white shadow p-4 rounded mb-6">
        <h2 className="text-lg font-semibold mb-2">➕ Add New Task</h2>
        <input
          type="text"
          placeholder="Task Title"
          className="border p-2 rounded w-full mb-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Description"
          className="border p-2 rounded w-full mb-2"
          rows="3"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <select
          className="border p-2 rounded w-full mb-2"
          value={assignedTo}
          onChange={(e) => setAssignedTo(e.target.value)}
        >
          <option value="tech@example.com">tech@example.com</option>
          <option value="tech2@example.com">tech2@example.com</option>
        </select>
        <button onClick={handleAddTask} className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Task
        </button>
      </div>

      {/* Task List */}
      <div>
        <h2 className="text-lg font-semibold mb-2">📋 All Tasks</h2>
        {tasks.length === 0 ? (
          <p>No tasks yet.</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((task) => (
              <li key={task.id} className="p-3 border rounded shadow-sm bg-gray-50">
                <h3 className="font-bold">{task.title}</h3>
                <p>{task.description}</p>
                <p className="text-sm text-gray-500">
                  Assigned to: <strong>{task.assignedTo}</strong> | Status: <strong>{task.status}</strong>
                </p>
              </li>
            ))}
          </ul>
        )}
      </div>

      <button onClick={handleLogout} className="mt-6 bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}
