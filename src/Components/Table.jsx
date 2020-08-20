import React from "react";

const Table = () => {
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
    </div>
  );
};

export default Table;
