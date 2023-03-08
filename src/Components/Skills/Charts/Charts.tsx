import { useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import styles from "./Charts.module.css";

interface Types {
  state: {
    name: string;
    percentage: number;
  }[];
}

const Charts = () => {
  const [state] = useState<Types["state"]>([
    { name: "HTML", percentage: 90 },
    { name: "CSS", percentage: 90 },
    { name: "JAVASCRIPT", percentage: 90 },
    { name: "BOOTSTRAP", percentage: 90 },
    { name: "REACT", percentage: 80 },
    { name: "REDUX", percentage: 70 },
    { name: "GIT", percentage: 80 },
    { name: "TYPESCRIPT", percentage: 70 },
  ]);

  return (
    <div className="container">
      <div className="row">
        {state.map((st, index) => (
          <section
            key={index}
            className={`col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center ${styles.margin}`}
          >
            <div style={{ width: 150, height: 150 }}>
              <CircularProgressbar
                styles={buildStyles({
                  textSize: "1.5rem",
                  pathColor: "#81B29A",
                  textColor: "#000",
                })}
                value={st.percentage}
                text={`${st.percentage}%`}
              />
              <p className={`${styles.chart} fw-bold`}>{st.name}</p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Charts;
