import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./content/Login";
import Signin from "./content/SignupPatient";
import Dashboard from "./content/Dashboard";
import SignupDoctor from "./content/SignupDoctor";
import SignupPatient from "./content/SignupPatient";


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        {!isLoggedIn ? (
          <>
            <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/signup" element={<Signin />} />
            <Route path="/signupd" element={<SignupDoctor />} />
            <Route path="/signupp" element={<SignupPatient />} />
            <Route path="*" element={<Navigate to="/login" />} /> 
          </>
        ) : (
          <>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/dashboard" />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
