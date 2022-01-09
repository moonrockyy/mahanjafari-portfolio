import IntroImage from "./IntroImage/IntroImage";
import IntroDesc from "./IntroDesc/IntroDesc";
import CvButton from "./CvButton/CvButton";
import styles from "./Intro.module.scss";

const Intro = () => {
  return (
    <main className={styles.intro}>
      <div className="row">
        <div className="col-12 col-md-6 mt-2">
          <IntroDesc />
          <CvButton>DOWNLOAD CV</CvButton>
        </div>

        <div className="col-12 col-md-6">
          <IntroImage />
        </div>
      </div>
    </main>
  );
};

export default Intro;
