import React from "react";
import Transactions from "./Transactions";
import GraphArea from "./GraphArea";
import Table from "./Table";

const Page = () => {
  return (
    <div className="page">
      <Transactions />
      <GraphArea/>
      <Table/>
    </div>
  );
};

export default Page;
