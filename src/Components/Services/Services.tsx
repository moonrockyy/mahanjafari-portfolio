import SectionTitle from "../SectionTitle/SectionTitle";
import ServiceBoxes from "./ServiceBoxes/ServiceBoxes";
import styles from "./Services.module.css";

const Services = () => {
  return (
    <div className={`d-flex flex-column ${styles.services}`} id="services">
      <SectionTitle color="#f1faee">SERVICES</SectionTitle>
      <article className="row m-5">
        <ServiceBoxes />
      </article>
    </div>
  );
};

export default Services;
