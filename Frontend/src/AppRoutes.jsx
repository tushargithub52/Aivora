import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Login from './pages/Login';
import Register from './pages/Register';
import { useState, useEffect } from 'react';
import ThemeToggle from './components/ThemeToggle';
import Chat from './pages/Chat';

const AppRoutes = () => {
  const [isDark, setIsDark] = useState(true);

  //check for saved theme in localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, []);

  //toggle theme and save preference to localStorage
  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
    localStorage.setItem('theme', isDark ? 'light' : 'dark');
  };

  return (
    <BrowserRouter>
      <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes