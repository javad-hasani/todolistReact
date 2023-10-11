import styles from "./Header.module.css";
import useDarkMode from "../hooks/useDarkMode";

function Header() {
  const [isDarkMode, toggleDarkMode] = useDarkMode();

  return (
    <header className={styles.header}>
      <p className={styles.logo}>تودولیست</p>
      <div onClick={toggleDarkMode} className={styles.darkToggle}>
        <img
          src={`./images/icon-${isDarkMode ? "moon" : "sun"}.svg`}
          alt={`${isDarkMode ? "moon" : "sun"} icon`}
        />
      </div>
    </header>
  );
}

export default Header;
