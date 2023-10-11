import styles from "./Button.module.css";

function Button({ children, className, onClick }) {
  return (
    <button
      aria-label="Button"
      onClick={onClick}
      className={`${className ? className : ""} ${styles.btn}`}
    >
      {children}
    </button>
  );
}

export default Button;
