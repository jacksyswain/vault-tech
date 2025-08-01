import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, role }) {
  const userRole = useSelector((state) => state.auth.role);

  if (userRole !== role) {
    return <Navigate to="/login" />;
  }

  return children;
}
