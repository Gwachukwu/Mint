import React from "react";
import Transactions from "./Transactions";
import Graph from "./Graph";
import GraphArea from "./GraphArea";

const Page = () => {
  return (
    <div className="page">
      <Transactions />
      {/* <Graph/> */}
      <GraphArea/>
    </div>
  );
};

export default Page;
