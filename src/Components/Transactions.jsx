import React, { useState } from "react";
import graph from "../Images/small-graph.png";

const Transactions = () => {
  const [state, setstate] = useState([
    { title: "Daily Transaction Volume", figure: "2342" },
    { title: "Daily Transaction Value", figure: "4,000,000" },
    { title: "Total Transaction Volume", figure: "452,000" },
    { title: "Total Transaction Value", figure: "4,000,000" },
  ]);
  return (
    <div className="transactions">
      {state.map((obj) => {
        return (
          <div className="transactions-card">
            <div>
              <p>{obj.title}</p>
              <p className="transactions-figure">
                <span
                  className={
                    obj.title === "Daily Transaction Volume" ||
                    obj.title === "Total Transaction Volume"
                      ? "hide"
                      : ""
                  }
                >
                  &#8358;
                </span>
                {obj.figure}
              </p>
            </div>
            <div>
              <img src={graph} alt="graph" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Transactions;
