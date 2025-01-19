/* /src/app/page.tsx */


import styles from "../styles/Home.module.css";

export default function Page() {
  return (
    <div className={styles.container}>
      <header>
        <img src="/logo.png" alt="Website Logo" className={styles.logo} />
        <link href="/about"></link>
        <a>
          <button
            style={{
              padding: "10px 20px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            AboutMe
          </button>
        </a>
      </header>
      </div>
  );
}
