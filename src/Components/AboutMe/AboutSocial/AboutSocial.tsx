import social from "../../../Assets/Images/social.svg";
import linkedin from "../../../Assets/Images/linkedin.svg";
import telegram from "../../../Assets/Images/telegram.svg";
import instagram from "../../../Assets/Images/instagram.svg";
import github from "../../../Assets/Images/github.svg";
import styles from "./AboutSocial.module.scss";

const AboutSocial = () => {
  return (
    <>
      <section
        className={`${styles.socials} col-10 col-md-6 d-flex flex-column align-items-center`}
      >
        <div className="row">
          <div className="col-3">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/mahanjafarii/"
              rel="noreferrer"
            >
              <img src={linkedin} alt="linkedin" className={styles.linkedin} />
            </a>
          </div>
          <div className="col-6"></div>
          <div className="col-3">
            <a target="_blank" href="https://t.me/mahanjfri" rel="noreferrer">
              <img src={telegram} alt="telegram" className={styles.tel} />
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <img src={social} alt="social" />
          </div>
        </div>
        <div className="row">
          <div className="col-3">
            <img src={instagram} alt="instagram" className={styles.insta} />
          </div>
          <div className="col-6"></div>
          <div className="col-3">
            <a
              target="_blank"
              href="https://github.com/moonergeek"
              rel="noreferrer"
            >
              <img src={github} alt="github" className={styles.git} />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSocial;
