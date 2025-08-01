import { useDispatch, useSelector } from "react-redux";
import { logout } from "../features/auth/authSlice";
import { markTaskCompleted } from "../features/tasks/taskSlice";
import { useNavigate } from "react-router-dom";

export default function TechnicianDashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth);
  const tasks = useSelector((state) => state.tasks.tasks);

  const assignedTasks = tasks.filter((task) => task.assignedTo === user?.email);

  const handleMarkCompleted = (taskId) => {
    dispatch(markTaskCompleted(taskId));
  };

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">🧰 Technician Dashboard</h1>

      <h2 className="text-lg font-semibold mb-2">📋 Assigned Tasks</h2>
      {assignedTasks.length === 0 ? (
        <p>No tasks assigned to you.</p>
      ) : (
        <ul className="space-y-2">
          {assignedTasks.map((task) => (
            <li
              key={task.id}
              className="p-3 border rounded shadow-sm bg-gray-50 flex justify-between items-start"
            >
              <div>
                <h3 className="font-bold">{task.title}</h3>
                <p>{task.description}</p>
                <p className="text-sm text-gray-500">
                  Status: <strong>{task.status}</strong>
                </p>
              </div>
              {task.status === "pending" && (
                <button
                  onClick={() => handleMarkCompleted(task.id)}
                  className="ml-4 bg-green-600 text-white px-3 py-1 rounded"
                >
                  Mark as Completed
                </button>
              )}
            </li>
          ))}
        </ul>
      )}

      <button onClick={handleLogout} className="mt-6 bg-red-500 text-white px-4 py-2 rounded">
        Logout
      </button>
    </div>
  );
}
