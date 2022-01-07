import call from "../../../Assets/Images/call.svg";
import sms from "../../../Assets/Images/sms.svg";
import styles from "./ContactMeContent.module.scss";

const ContactMeContent = () => {
  return (
    <div className="container">
      <div className="row">
        <section
          className={`d-flex flex-column align-items-center ${styles.title}`}
        >
          <p>Glad to have connection with you</p>

          <div className="d-flex">
            <img src={call} alt="call" />
            <p>+989362410376</p>
          </div>

          <div className="d-flex">
            <img src={sms} alt="sms" />
            <p>mahanjafari14@gmail.com</p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ContactMeContent;
