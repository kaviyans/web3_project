import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./profile/Login";
import Signin from "./profile/SignupPatient";
import Dashboard from "./Doctor/Dashboard";
import SignupDoctor from "./profile/SignupDoctor";
import SignupPatient from "./profile/SignupPatient";
import { SidebarProvider } from "./components/ui/sidebar";
import { AppSidebar } from "./components/demo/AppSidebar";
import Prescription from "./Doctor/Prescription";
import Dashboardpat from "./Patient/Dashboardpat";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState(null);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    const userRole = localStorage.getItem("role");
    setIsLoggedIn(loggedIn);
    setRole(userRole);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setRole(null);
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("role");
    console.log("User logged out");
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <SidebarProvider>
          <div className="flex">
            <AppSidebar handleLogout={handleLogout} />
            <div className="flex-1">
              <Routes>
                {role === "doctor" && (
                  <>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/prescription" element={<Prescription />} />
                  </>
                )}
                {role === "patient" && (
                  <>
                    <Route path="/dashboardpat" element={<Dashboardpat />} />
                  </>
                )}
                <Route path="*" element={<Navigate to={role === "doctor" ? "/dashboard" : "/dashboardpat"} />} />
              </Routes>
            </div>
          </div>
        </SidebarProvider>
      ) : (
        <Routes>
          <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/signup" element={<Signin />} />
          <Route path="/signupd" element={<SignupDoctor />} />
          <Route path="/signupp" element={<SignupPatient />} />
          <Route path="*" element={<Navigate to="/login" />} />
        </Routes>
      )}
    </BrowserRouter>
  );
}

export default App;
