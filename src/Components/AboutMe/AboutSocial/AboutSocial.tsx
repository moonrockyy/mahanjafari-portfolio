import social from "../../../Assets/Images/social.svg";
import linkedin from "../../../Assets/Images/linkedin.svg";
import telegram from "../../../Assets/Images/telegram.svg";
import instagram from "../../../Assets/Images/instagram.svg";
import github from "../../../Assets/Images/github.svg";
import styles from "./AboutSocial.module.scss";

const AboutSocial = () => {
  return (
    <>
      <section className="col-6 d-flex flex-column align-items-center">
        <div className="row">
          <div className="col-3">
            <img src={linkedin} alt="linkedin" className={styles.linkedin} />
          </div>
          <div className="col-6"></div>
          <div className="col-3">
            <img src={telegram} alt="telegram" className={styles.tel} />
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
            <img src={github} alt="github" className={styles.git} />
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutSocial;
