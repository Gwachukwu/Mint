import React, { useState } from "react";

const Menu = () => {
  const [state, setState] = useState("overview");
  return (
    <div className="menu">
      <button>GENERATE INVOICE</button>
      <div>
        <p>Main</p>
        <p
          className={
            state === "overview" ? "active clickable-menu" : "clickable-menu"
          }
          onClick={() => setState("overview")}
        >
          <i className="overview"></i>Overview
        </p>
      </div>
      <div>
        <p>Payments</p>
        <p
          className={
            state === "allpayments" ? "active clickable-menu" : "clickable-menu"
          }
          onClick={() => setState("allpayments")}
        >
          <i className="a-payments"></i>All Payments
        </p>
        <p
          className={
            state === "rpayments" ? "active clickable-menu" : "clickable-menu"
          }
          onClick={() => setState("rpayments")}
        >
          <i className="r-payments"></i>Reconciled Payments
        </p>
        <p
          className={
            state === "upayments" ? "active clickable-menu" : "clickable-menu"
          }
          onClick={() => setState("upayments")}
        >
          <i className="u-payments"></i>Un-Reconciled Payments
        </p>
        <p
          className={
            state === "msettlement" ? "active clickable-menu" : "clickable-menu"
          }
          onClick={() => setState("msettlement")}
        >
          <i className="m-settlement"></i>Manual Settlement
        </p>
      </div>
      <div>
        <p>Orders</p>
        <p
          className={
            state === "allorders" ? "active clickable-menu" : "clickable-menu"
          }
          onClick={() => setState("allorders")}
        >
          <i className="a-orders"></i>All Orders
        </p>
        <p
          className={
            state === "porders" ? "active clickable-menu" : "clickable-menu"
          }
          onClick={() => setState("porders")}
        >
          <i className="p-orders"></i>Pending Orders
        </p>
        <p
          className={
            state === "rorders" ? "active clickable-menu" : "clickable-menu"
          }
          onClick={() => setState("rorders")}
        >
          <i className="r-orders"></i>Reconciled Orders
        </p>
      </div>
      <div className="merchant">
        <p
          className={
            state === "mprofile" ? "active clickable-menu" : "clickable-menu"
          }
          onClick={() => setState("mprofile")}
        >
          <i className="m-profile"></i>Merchant Profile
        </p>
      </div>
    </div>
  );
};

export default Menu;
