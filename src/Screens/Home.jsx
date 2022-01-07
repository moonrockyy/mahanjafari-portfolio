import Header from "../Components/Header/Header";
import Intro from "../Components/Intro/Intro";
import AboutMe from "../Components/AboutMe/AboutMe";
import Skills from "../Components/Skills/Skills";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <Intro />
        <AboutMe />
        <Skills />
      </div>
    </div>
  );
};

export default Home;
