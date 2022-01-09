import SectionTitle from "../SectionTitle/SectionTitle";
import Charts from "./Charts/Charts";

const Skills = () => {
  return (
    <div className={`d-flex flex-column`} id="skills">
      <SectionTitle color="#003049">SKILLS</SectionTitle>
      <article className="row m-5">
        <Charts />
      </article>
    </div>
  );
};

export default Skills;
