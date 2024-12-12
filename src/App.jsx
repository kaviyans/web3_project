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

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.setItem("isLoggedIn", "false");
    console.log("User logged out");
  };

  return (
    <BrowserRouter>
      {isLoggedIn ? (
        <SidebarProvider>
          <div className="flex">
            {/* Sidebar */}
            <AppSidebar handleLogout={handleLogout} />

            {/* Main Content */}
            <div className="flex-1">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/prescription" element={<Prescription />} />
                <Route path="*" element={<Navigate to="/dashboard" />} />
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
