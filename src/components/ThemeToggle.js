import { useTheme } from '../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <button onClick={toggleTheme}>
      {theme === 'light' ? 'Ìºô Dark Mode' : '‚òÄÔ∏è Light Mode'}
    </button>
  );
};

export default ThemeToggle;
