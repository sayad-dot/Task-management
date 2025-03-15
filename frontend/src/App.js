import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Dashboard from './pages/Dashboard'; // Corrected the path
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const isAuthenticated = false; // For demo purposes. In a real app, use JWT or localStorage to check authentication.

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard isAuthenticated={isAuthenticated} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
