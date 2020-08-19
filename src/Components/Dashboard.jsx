import React from "react";
import Header from "./Header";
import Menu from "./Menu";
import Page from "./Page";

const Dasboard = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="main-body">
      <Menu />
      <Page />
      </div>
    </React.Fragment>
  );
};

export default Dasboard;
