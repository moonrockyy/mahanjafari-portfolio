import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import ContactButton from "./ContactButton/ContactButton";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className="navbar mt-md-3" id="home">
      <div className="col-12 col-md-2 d-none d-md-flex justify-content-center">
        <Logo />
      </div>

      <div className={`col-12 col-md-8`}>
        <Navbar />
      </div>

      <div className="col-12 d-none col-md-2 d-md-flex justify-content-center">
        <ContactButton>
          <a className={styles.decor} href="#contactme">
            Contact Me
          </a>
        </ContactButton>
      </div>
    </header>
  );
};

export default Header;
