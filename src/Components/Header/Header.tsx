import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import ContactButton from "./ContactButton/ContactButton";

const Header = () => {
  return (
    <header className="navbar mt-3">
      <div className="container-fluid">
        <div className="col-12 col-md-2 d-flex justify-content-center">
          <Logo />
        </div>

        <div className={`col-12 col-md-8`}>
          <Navbar />
        </div>

        <div className="col-12 col-md-2 d-flex justify-content-center">
          <ContactButton>Contact Me</ContactButton>
        </div>
      </div>
    </header>
  );
};

export default Header;
