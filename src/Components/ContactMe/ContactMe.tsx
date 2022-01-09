import SectionTitle from "../SectionTitle/SectionTitle";
import ContactAddresses from "./ContactAddresses/ContactAddresses";
import ContactIcons from "./ContactIcons/ContactIcons";
import ContactTitle from "./ContactTitle/ContactTitle";

const ContactMe = () => {
  return (
    <div className={`d-flex flex-column`} id="contactme">
      <SectionTitle color="#003049">CONTACT ME</SectionTitle>
      <article className="row mt-2">
        <div className="container">
          <section className="row">
            <ContactTitle />
            <ContactAddresses />
            <ContactIcons />
          </section>
        </div>
      </article>
    </div>
  );
};

export default ContactMe;
