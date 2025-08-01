import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/authSlice";

export default function Login() {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const role = location.state?.role || "technician";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dummyUsers = {
    admin: { email: "admin@example.com", password: "admin123" },
    technician: { email: "tech@example.com", password: "tech123" },
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const user = dummyUsers[role];

    if (email === user.email && password === user.password) {
      dispatch(login({ user: { email }, role }));
      navigate(role === "admin" ? "/admin" : "/technician");
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-sm bg-white p-6 rounded shadow">
        <h2 className="text-xl font-bold mb-4 text-center">Login as {role}</h2>
        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input
            type="email"
            placeholder="Email"
            className="p-2 border rounded"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="p-2 border rounded"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          Try:
          <br />
          <strong>Admin:</strong> admin@example.com / admin123
          <br />
          <strong>Technician:</strong> tech@example.com / tech123
        </p>
      </div>
    </div>
  );
}

