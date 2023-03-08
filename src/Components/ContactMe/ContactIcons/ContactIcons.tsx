import telegram from "../../../Assets/Images/dtelegram.svg";
import instagram from "../../../Assets/Images/dinstagram.svg";
import linkedin from "../../../Assets/Images/dlinkedin.svg";
import styles from "./ContactIcons.module.css";

const ContactIcons = () => {
  return (
    <div className="d-flex justify-content-center mt-3 mb-4">
      <a target="_blank" href="https://t.me/mahanjfri" rel="noreferrer">
        <img src={telegram} alt="telegram" className={`${styles.icons}`} />
      </a>

      <a
        target="_blank"
        href="https://www.linkedin.com/in/mahanjafarii/"
        rel="noreferrer"
      >
        <img
          src={linkedin}
          alt="linkedin"
          className={`${styles.margin} ${styles.icons}`}
        />
      </a>

      <img
        src={instagram}
        alt="instagram"
        className={`${styles.margin} ${styles.icons}`}
      />
    </div>
  );
};

export default ContactIcons;
