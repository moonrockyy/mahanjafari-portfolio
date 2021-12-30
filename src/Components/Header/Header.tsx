import Logo from "./Logo/Logo";
import Navbar from "./Navbar/Navbar";
import ContactButton from "./ContactButton/ContactButton";

const Header = () => {
  return (
    <header className="navbar mt-3">
      <div className="col-2 d-flex justify-content-center">
        <Logo />
      </div>

      <div className="col-8">
        <Navbar />
      </div>

      <div className="col-2 d-flex justify-content-center">
        <ContactButton>Contact Me</ContactButton>
      </div>
    </header>
  );
};

export default Header;
