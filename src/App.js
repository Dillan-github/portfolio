import white_logo from './images/White_Logo_SVG.svg';
import black_logo from './images/Black_Logo_SVG.svg';
import NavBar from './components/navbar/NavBar';
import './App.css';
import useLocalStorage from 'use-local-storage';
import { useState, useEffect } from 'react';

export const useTheme = () => {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light'); 

  useEffect(() => {
      localStorage.setItem('theme', theme);
      document.body.className = theme; // Optional: Update body class for styling
  }, [theme]);

  const toggleTheme = () => {
      setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return [theme, toggleTheme];
};


function App() {
  const [theme, toggleTheme] = useTheme();

  

  return (
    <div className="App" data-theme={theme}>
        <NavBar />
    </div>
  );
}

export default App;
