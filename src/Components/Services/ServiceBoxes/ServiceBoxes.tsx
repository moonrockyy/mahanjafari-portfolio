import { useState } from "react";

interface Types {
  state: {
    name: string;
    des: string;
  }[];
}

const Charts = () => {
  const [state] = useState<Types["state"]>([
    { name: "Ui Design", des: "Design your product in the most creative way" },
    {
      name: "Web Design",
      des: "Using best technologies to develop your product",
    },
    { name: "Wordpress", des: "An affordable way to develop your product" },
  ]);

  console.log(state);

  return (
    <div className="container">
      <div className="row">
        <section></section>
      </div>
    </div>
  );
};

export default Charts;
