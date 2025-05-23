function Welcome({ onLogout }) {
  return (
    <div className="welcome-container">
      <h2>Welcome back, user!</h2>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
}

export default Welcome;
