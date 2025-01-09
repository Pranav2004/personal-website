/* /src/app/page.tsx */

import styles from '../styles/Home.module.css';

export default function Page() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Pranav Jadav</h1>
      <p className={styles.subtitle}>Web Developer | Full Stack Engineer</p>
      <p>
        <a
          href="https://github.com/pranavjadav"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          GitHub
        </a>{" "}
        |{" "}
        <a
          href="https://linkedin.com/in/pranavjadav"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.link}
        >
          LinkedIn
        </a>
      </p>
    </div>
  );
}
