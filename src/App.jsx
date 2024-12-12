import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Login from "./content/Login";
import Signin from "./content/Signin";

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
            <Route path="*" element={<Navigate to="/login" />} /> {/* Redirects unknown routes */}
          </>
        ) : (
          <>
            {/* Example dashboard route */}
            {/* <Route path="/dashboard" element={<div>Dashboard</div>} />
            <Route path="*" element={<Navigate to="/dashboard" />} /> */}
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
