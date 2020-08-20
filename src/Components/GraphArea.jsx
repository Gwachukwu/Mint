import React from "react";

const GraphArea = () => {
  const date = new Date().toDateString();
  let arr = date.match(/("[^"]+"|[^"\s]+)/g);
  return (
    <div className="graph-area">
      <div className="graph">
        <div>
          <div className="graph-head">
            <p className="graph-date">
              Today:{`${arr[2]}, ${arr[1]} ${arr[3]}`}
            </p>
            <div>
              <select name="" id="">
                <option value="">1 Jan- 1 Jun</option>
              </select>
              <button className="graph-button-gap">
                <i className="left-arrow"></i>
              </button>
              <button>
                <i className="right-arrow"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="big-graph">
          <p>Jan</p>
          <p>Feb</p>
          <p>Mar</p>
          <p>Apr</p>
          <p>May</p>
          <p>Jun</p>
        </div>
      </div>
      <div className="graph-aside">
        <div className="graph-aside-first">
          <p className="aside-header"> Orders</p>
          <div className="progress-bar">
            <div></div>
          </div>
          <p>
            Pending Orders: <span className="yellow-number">20</span>
          </p>
          <p>
            Reconciled Orders: <span className="green-number">80</span>
          </p>
          <p>
            Total Orders: <span className="blue-number">100</span>
          </p>
        </div>
        <div className="graph-aside-second">
          <p className="aside-header">Payments</p>
          <div className="progress-bar">
            <div></div>
          </div>
          <p>
            Pending Payments: <span className="yellow-number">20</span>
          </p>
          <p>
            Reconciled Payments: <span className="green-number">80</span>
          </p>
          <p>
            Total Payments: <span className="blue-number">100</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GraphArea;
