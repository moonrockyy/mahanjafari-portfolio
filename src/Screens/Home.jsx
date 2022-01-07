import Header from "../Components/Header/Header";
import Intro from "../Components/Intro/Intro";
import AboutMe from "../Components/AboutMe/AboutMe";
import Skills from "../Components/Skills/Skills";
import Services from "../Components/Services/Services";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <Intro />
        <AboutMe />
        <Skills />
        <Services />
      </div>
    </div>
  );
};

export default Home;
