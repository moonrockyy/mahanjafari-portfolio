import call from "../../../Assets/Images/call.svg";
import sms from "../../../Assets/Images/sms.svg";
import styles from "./ContactAddresses.module.css";

const ContactAddresses = () => {
  return (
    <>
      <div className="d-flex justify-content-center mt-3 h2">
        <img src={call} alt="call" />
        <p className={`pt-1 ${styles.add}`}>+989362410376</p>
      </div>

      <div className="d-flex justify-content-center mt-3 h2">
        <img src={sms} alt="sms" />
        <p className={`pt-1 ${styles.add}`}>mahanjafari14@gmail.com</p>
      </div>
    </>
  );
};

export default ContactAddresses;
