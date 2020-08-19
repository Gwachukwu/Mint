import React from "react";

const Menu = () => {
  return (
    <div className="menu">
      <button>GENERATE INVOICE</button>
      <div>
        <p>Main</p>
        <p className="active">
          <i className="overview"></i>Overview
        </p>
      </div>
      <div>
        <p>Payments</p>
        <p>
          <i className="a-payments"></i>All Payments
        </p>
        <p>
          <i className="r-payments"></i>Reconciled Payments
        </p>
        <p>
          <i className="u-payments"></i>Un-Reconciled Payments
        </p>
        <p>
          <i className="m-settlement"></i>Manual Settlement
        </p>
      </div>
      <div>
        <p>Orders</p>
        <p>
          <i className="a-orders"></i>All Orders
        </p>
        <p>
          <i className="p-orders"></i>Pending Orders
        </p>
        <p>
          <i className="r-orders"></i>Reconciled Orders
        </p>
      </div>
      <div>
        <p>
          <i className="m-profile"></i>Merchant Profile
        </p>
      </div>
    </div>
  );
};

export default Menu;
