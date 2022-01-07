import Header from "../Components/Header/Header";
import Intro from "../Components/Intro/Intro";
import AboutMe from "../Components/AboutMe/AboutMe";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <Header />
        <Intro />
        <AboutMe />
      </div>
    </div>
  );
};

export default Home;
