import Header from "../Components/Header/Header";
import Intro from "../Components/Intro/Intro";
import AboutMe from "../Components/AboutMe/AboutMe";
import Skills from "../Components/Skills/Skills";
import Services from "../Components/Services/Services";
import ContactMe from "./../Components/ContactMe/ContactMe";
import Footer from "../Components/Footer/Footer";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <Intro />
        <AboutMe />
        <Skills />
        <Services />
        <ContactMe />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
