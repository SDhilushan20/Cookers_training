import { useState } from "react";
import Login from "./Login";
import Welcome from "./Welcome";
import "./App.css"; // optional for styling

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => setIsLoggedIn(true);
  const handleLogout = () => setIsLoggedIn(false);

  return (
    <div className="app">
      <h1>My App</h1>
      {isLoggedIn ? (
        <Welcome onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
