import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../features/auth/authSlice";

export default function Navbar() {
  const { user, role } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <nav className="bg-gray-800 text-white p-3 flex justify-between items-center shadow-md">
      {}
      <div className="flex items-center space-x-2">
        <img
          src="/src/assets/vaultLogo.jpg"
          alt="Vault Logo"
          className="w-8 h-8 object-contain rounded-xl"
        />
        <h1 className="text-lg font-bold">Maintenance Vault</h1>
      </div>

      {/* Right Side */}
      <div className="space-x-3 text-sm md:text-base">
        {!user ? (
          <Link
            to="/login"
            className="bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded"
          >
            Login
          </Link>
        ) : (
          <>
            <span className="hidden sm:inline text-gray-300">
              Welcome, {role}
            </span>
            <button
              onClick={handleLogout}
              className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
