import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import TodoWrapper from "./components/TodoWrapper";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Home from "./components/Home";
import ProtectedRoute from "./components/ProtectedRoute";
import { AuthProvider } from "./components/Context/AuthContext";
import Alert from "./components/alert/Alert";

function App() {
  return (
    <AuthProvider>
      <div className="w-full h-[100vh] dark:bg-[#242424] ">
        <Navbar />
        <Alert />
        <div>
          <Routes>
            <Route exacat path="/" element={<Home />} />
            <Route
              path="/todo"
              element={
                <ProtectedRoute>
                  <TodoWrapper />
                </ProtectedRoute>
              }
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
