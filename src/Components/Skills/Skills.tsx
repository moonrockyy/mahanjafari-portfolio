import SectionTitle from "../SectionTitle/SectionTitle";
import Charts from "./Charts/Charts";

const AboutMe = () => {
  return (
    <div className={`d-flex flex-column`}>
      <SectionTitle color="#003049">SKILLS</SectionTitle>
      <article className="row m-5">
        <Charts />
      </article>
    </div>
  );
};

export default AboutMe;
