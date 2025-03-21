import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard'; // Corrected the path

import Register from './components/Register';
import AuthPage from './components/AuthPage';

function App() {
  // Check if user is authenticated based on token in localStorage
  const isAuthenticated = localStorage.getItem('token') ? true : false;

  return (
    <Router>
      <Routes>
       
        <Route path="/" element={<AuthPage />} />

        <Route path="/register" element={<Register />} />
        <Route 
          path="/dashboard" 
          element={<Dashboard isAuthenticated={isAuthenticated} />}  // Pass isAuthenticated here
        />
      </Routes>
    </Router>
  );
}

export default App;
