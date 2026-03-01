import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Profile from './components/Profile';
import BlogPost from './components/BlogPost';
import ProtectedRoute from './components/ProtectedRoute';
import { useState, useEffect } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(localStorage.getItem('auth') === 'true');

  const handleLogin = () => {
    localStorage.setItem('auth', 'true');
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.setItem('auth', 'false');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/profile">Profile</Link></li>
          <li><Link to="/blog/1">Blog Post 1</Link></li>
          <li><Link to="/blog/2">Blog Post 2</Link></li>
        </ul>
        <button onClick={isLoggedIn ? handleLogout : handleLogin}>
          {isLoggedIn ? 'Logout' : 'Login'}
        </button>
      </nav>

      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route
          path="/profile/*"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
