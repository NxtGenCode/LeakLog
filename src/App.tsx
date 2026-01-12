import { Routes, Route, Navigate } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import DashboardPage from "./pages/DashboardPage";

export default function App() {
  const isLoggedIn = false; // replace with real auth state

  return (
    <Routes>
      <Route path="/" element={isLoggedIn ? <Navigate to="/dashboard" /> : <AuthPage />} />
      <Route path="/dashboard" element={isLoggedIn ? <DashboardPage /> : <Navigate to="/" />} />
    </Routes>
  );
}