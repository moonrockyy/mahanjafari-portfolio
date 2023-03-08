import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav>
      <ul className={`${styles.nav}`}>
        <li className={styles["nav-item"]}>
          <a className={styles.decor} href="#home">Home</a>
        </li>

        <li className={styles["nav-item"]}>
          <a className={styles.decor} href="#aboutme">About Me</a>
        </li>

        <li className={styles["nav-item"]}>
          <a className={styles.decor} href="#skills">Skills</a>
        </li>

        <li className={styles["nav-item"]}>
          <a className={styles.decor} href="#services">Services</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
