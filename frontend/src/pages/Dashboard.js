// src/pages/Dashboard.js
import React from 'react';
import { useNavigate } from 'react-router-dom'; // Updated import

const Dashboard = ({ isAuthenticated }) => {
  const navigate = useNavigate(); // Using useNavigate instead of useHistory

  const handleLogin = () => {
    navigate('/login'); // Redirect to login page
  };

  const handleRegister = () => {
    navigate('/register'); // Redirect to register page
  };

  const handleLogout = () => {
    // Here, you would remove the JWT token from localStorage or cookies to log out
    alert('Logged out!');
    navigate('/'); // Redirect to the homepage
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          <h1>Welcome to the Dashboard!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Please Log in or Register</h1>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleRegister}>Register</button>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
