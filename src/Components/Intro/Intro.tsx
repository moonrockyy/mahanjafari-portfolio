import IntroImage from "./IntroImage/IntroImage";
import IntroDesc from "./IntroDesc/IntroDesc";
import CvButton from "./CvButton/CvButton";

const Intro = () => {
  return (
    <main className="mt-3">
      <div className="row">
        <div className="col-6 mt-2">
          <IntroDesc />
          <CvButton>DOWNLOAD CV</CvButton>
        </div>

        <div className="col-6">
          <IntroImage />
        </div>
      </div>
    </main>
  );
};

export default Intro;
