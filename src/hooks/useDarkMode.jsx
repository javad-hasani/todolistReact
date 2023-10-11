import { useEffect, useState } from "react";

const DARK_THEME = "dark";
const LOCAL_STORAGE_KEY = "theme";

function useDarkMode() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    if (newMode) {
      document.documentElement.setAttribute("data-theme", DARK_THEME);
      localStorage.setItem(LOCAL_STORAGE_KEY, DARK_THEME);
    } else {
      document.documentElement.removeAttribute("data-theme");
      localStorage.removeItem(LOCAL_STORAGE_KEY);
    }
  };

  useEffect(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (savedTheme === DARK_THEME) {
      setIsDarkMode(true);
      document.documentElement.setAttribute("data-theme", DARK_THEME);
    }
  }, []);

  return [isDarkMode, toggleDarkMode];
}

export default useDarkMode;
