import SectionTitle from "../SectionTitle/SectionTitle";
import ContactMeContent from "./ContactMeContent/ContactMeContent";

const ContactMe = () => {
  return (
    <div className={`d-flex flex-column`}>
      <SectionTitle color="#003049">CONTACT ME</SectionTitle>
      <article className="row m-5">
        <ContactMeContent />
      </article>
    </div>
  );
};

export default ContactMe;
