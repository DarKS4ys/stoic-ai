import { useState } from 'react';
import { useEffect } from 'react';
import { Button } from './ui/button';
import { Moon } from 'lucide-react';

const DarkSwitch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const rootElement = document.documentElement;
    // Use localStorage to get and set the dark mode state
    const savedDarkMode = localStorage.getItem('darkMode');
    if (savedDarkMode === 'true') {
      setIsDarkMode(true);
      rootElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      rootElement.classList.remove('dark');
    }
  }, []);

  useEffect(() => {
    const rootElement = document.documentElement;
    if (isDarkMode) {
      rootElement.classList.add('dark');
      localStorage.setItem('darkMode', 'true');
    } else {
      rootElement.classList.remove('dark');
      localStorage.setItem('darkMode', 'false');
    }
  }, [isDarkMode]);

  const handleClick = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <Button
      className={`flex gap-2 btn-invert-dark ${isDarkMode ? 'dark' : ''}`}
      onClick={handleClick}
    >
      <Moon />
      Toggle Dark Mode
    </Button>
  );
};

export default DarkSwitch;
