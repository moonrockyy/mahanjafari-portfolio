import IntroImage from "./IntroImage/IntroImage";
import IntroDesc from "./IntroDesc/IntroDesc";
import CvButton from "./CvButton/CvButton";
import styles from "./Intro.module.css";
import ContactButton from "../Header/ContactButton/ContactButton";
import stylesHeader from '../Header/Header.module.css';

const Intro = () => {
  return (
    <main className={styles.intro}>
      <div className="row">
        <div className="order-1 order-lg-0 col-12 col-lg-6 mt-2">
          <IntroDesc />
          <CvButton>DOWNLOAD CV</CvButton>
          <div className="col-12 justify-content-md-center d-flex d-md-none">
            <ContactButton>
              <a className={stylesHeader.decor} href="#contactme">
                Contact Me
              </a>
            </ContactButton>
          </div>
        </div>

        <div className="order-0 order-lg-1 col-12 col-lg-6">
          <IntroImage />
        </div>
      </div>
    </main>
  );
};

export default Intro;
