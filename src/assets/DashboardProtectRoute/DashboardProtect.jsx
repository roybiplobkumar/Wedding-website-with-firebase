import { Navigate } from "react-router-dom";

const DashboardProtect = ({ children }) => {
  const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

  return isAuthenticated ? children : <Navigate to="/dashboard-login" replace />;
};

export default DashboardProtect;
