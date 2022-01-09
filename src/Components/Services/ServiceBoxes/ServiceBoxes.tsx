import { useState } from "react";
import uidesign from "../../../Assets/Images/uidesign.svg";
import webdesign from "../../../Assets/Images/webdesign.svg";
import wordpress from "../../../Assets/Images/wordpress.svg";
import styles from "./ServiceBoxes.module.scss";

interface Types {
  state: {
    name: string;
    des: string;
    icon: any;
  }[];
}

const Charts = () => {
  const [state] = useState<Types["state"]>([
    {
      name: "Ui Design",
      des: "Design your product in the most creative way",
      icon: uidesign,
    },
    {
      name: "Web Design",
      des: "Using best technologies to develop your product",
      icon: webdesign,
    },
    {
      name: "Wordpress",
      des: "An affordable way to develop your product",
      icon: wordpress,
    },
  ]);

  return (
    <div className="container">
      <div className="row">
        {state.map((st, index) => (
          <section
            key={index}
            className="col-12 col-md-4 mb-3 d-flex flex-column align-items-center"
          >
            <div
              className={`d-flex flex-column justify-content-center align-items-center ${styles.white}`}
            >
              <img src={st.icon} alt={st.name} />
              <h4 className={`text-center mt-4 fw-bold h3`}>{st.name}</h4>
            </div>

            <div className={`${styles.des} d-flex align-items-center`}>
              <p>{st.des}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Charts;
