import SectionTitle from "../SectionTitle/SectionTitle";
import Charts from "./Charts/Charts";
import styles from "./Skills.module.scss";

const AboutMe = () => {
  return (
    <div className={`d-flex flex-column ${styles.skills}`}>
      <SectionTitle color="#003049">SKILLS</SectionTitle>
      <article className="row m-5">
        <Charts />
      </article>
    </div>
  );
};

export default AboutMe;
