import React, { useState } from "react";
import LoginForm from "./Components/LoginForm";

function LoginPage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogin = (user) => {
    setIsLoggedIn(true);
    setUsername(user);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  return (
    <div style={{ padding: "2rem", textAlign: "center" }}>
      {isLoggedIn ? (
        <>
          <h2>Welcome, {username}!</h2>
          <button onClick={handleLogout} className="logout-btn">
            Logout
          </button>
        </>
      ) : (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default LoginPage;
