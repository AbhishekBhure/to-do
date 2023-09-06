import { Navigate } from "react-router-dom";
import { useAuth } from "./Context/AuthContext";

import React from "react";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    <Navigate to="/" />;
  }
  return children;
};

export default ProtectedRoute;
