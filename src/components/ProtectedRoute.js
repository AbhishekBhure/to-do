import { useAuth } from "./Context/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log(user);

  return children;
};

export default ProtectedRoute;
