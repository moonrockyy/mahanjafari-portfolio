import styles from "./IntroDesc.module.scss";

const IntroDesc = () => {
  return (
    <div className={styles.whole}>
      <p className={styles.hey}>HEY EVERY BODY!</p>

      <h1 className={styles.title}>I am Mahan Jafari</h1>

      <h2 className={styles.desc}>
        a software engineering student who is experienced
        <br /> in a field of frontend development
      </h2>
    </div>
  );
};

export default IntroDesc;
