import styles from "./Attribution.module.css";

function Attribution() {
  return (
    <footer>
      <div className={styles.attributionWrapper}>
        <p className={styles.attribution}>
          <span>
            کد نویسی شده توسط
            <a
              className={styles.attbLink}
              href="https://twitter.com/CodePapa360"
              target="_blank"
              rel="noreferrer"
            >
              وادو
            </a>
          </span>
     
        </p>
      </div>
    </footer>
  );
}

export default Attribution;
