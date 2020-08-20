import React, { useState } from "react";
import MainTable from "./MainTable";

const Table = () => {
  const [state, setState] = useState(1);
  return (
    <div>
      <p className="payments-header">Payments</p>
      <div className="payments-settings">
        <div>
          <label>
            Showing
            <select className="payment-number">
              <option>20</option>
            </select>
            out of 500 payments
          </label>
          <div className="payments-search">
            <i className="search-icon"></i>
            <input
              type="search"
              name="search"
              id="search"
              placeholder="Search payments"
            />
          </div>
        </div>
        <label className="payments-show">
          Show
          <select>
            <option value="">All</option>
            <option value="">Reconciled</option>
            <option value="">Un-reconciled</option>
            <option value="">Settled</option>
            <option value="">Un-settled</option>
          </select>
        </label>
      </div>
      <MainTable />
      <div className="footer">
        <p>Showing 1 to 10 of 500 entries</p>
        <div>
          <a
            className={state === "Previous" ? "active-page" : ""}
            onClick={() => setState("Previous")}
          >
            Previous
          </a>
          <a
            className={state === 1 ? "active-page" : ""}
            onClick={() => setState(1)}
          >
            1
          </a>
          <a
            className={state === 2 ? "active-page" : ""}
            onClick={() => setState(2)}
          >
            2
          </a>
          <a
            className={state === "Next" ? "active-page" : ""}
            onClick={() => setState("Next")}
          >
            Next
          </a>
        </div>
      </div>
    </div>
  );
};

export default Table;
