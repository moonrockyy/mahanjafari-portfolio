import { useEffect } from "react";
import Home from "../Screens/Home";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
    });
  }, []);

  return (
    <>
      <Home />
    </>
  );
};

export default App;
