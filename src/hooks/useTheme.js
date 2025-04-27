import { useState } from 'react';

const useTheme = () => {
  const [darkMode, setDarkMode] = useState(true); // Default to dark mode

  const toggleTheme = () => setDarkMode(!darkMode);

  const themeStyles = {
    backgroundColor: darkMode ? '#121212' : '#f5f5f5',
    textColor: darkMode ? '#f5f5f5' : '#333',
    boxColor: darkMode ? '#1e1e1e' : 'white',
  };

  return { darkMode, toggleTheme, themeStyles };
};

export default useTheme;