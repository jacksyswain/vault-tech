import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function RoleSelector() {
  const [role, setRole] = useState("technician");
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/login", { state: { role } });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h2 className="text-2xl font-bold mb-6">🛠️ Maintenance Portal</h2>
      <div className="mb-4">
        <label className="mr-4">
          <input type="radio" value="technician" checked={role === "technician"} onChange={() => setRole("technician")} />
          <span className="ml-2">Technician</span>
        </label>
        <label className="ml-4">
          <input type="radio" value="admin" checked={role === "admin"} onChange={() => setRole("admin")} />
          <span className="ml-2">Admin</span>
        </label>
      </div>
      <button className="px-4 py-2 bg-blue-600 text-white rounded" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}
