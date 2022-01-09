import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav>
      <ul className={`${styles.nav}`}>
        <li className={styles["nav-item"]}>Home</li>

        <li className={styles["nav-item"]}>About Me</li>

        <li className={styles["nav-item"]}>Skills</li>

        <li className={styles["nav-item"]}>Services</li>
      </ul>
    </nav>
  );
};

export default Navbar;
