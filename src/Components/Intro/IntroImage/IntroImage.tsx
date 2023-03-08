import mahan from "../../../Assets/Images/mahan.svg";
import styles from "./IntroImage.module.css";

const IntroImage = () => {
  return <img src={mahan} alt="mahanjafari" className={styles.intro} />;
};

export default IntroImage;
