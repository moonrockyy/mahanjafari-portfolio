import SectionTitle from "./../SectionTitle/SectionTitle";
import AboutDesc from "./AboutDesc/AboutDesc";
import AboutSocial from "./AboutSocial/AboutSocial";
import styles from "./AboutMe.module.scss";

const AboutMe = () => {
  return (
    <div className={`d-flex flex-column ${styles.about}`} id="aboutme">
      <SectionTitle color="#f1faee">ABOUT ME</SectionTitle>
      <article className="row m-3 m-md-5">
        <AboutDesc />
        <AboutSocial />
      </article>
    </div>
  );
};

export default AboutMe;
