import React, { useState } from "react";

const MainTable = () => {
  const [state, setstate] = useState([
    {
      type: "Apple Mac Book 15^250 SSD 12G",
      price: "$7340",
      num: 1234567890,
      time: "12:30",
      status: "Reconciled",
    },
    {
      type: "Apple Mac Book 15^250 SSD 12G",
      price: "$7340",
      num: 1234567890,
      time: "12:30",
      status: "Pending",
    },
    {
      type: "Apple Mac Book 15^250 SSD 12G",
      price: "$7340",
      num: 1234567890,
      time: "12:30",
      status: "Reconciled",
    },
    {
      type: "Apple Mac Book 15^250 SSD 12G",
      price: "$7340",
      num: 1234567890,
      time: "12:30",
      status: "Reconciled",
    },
    {
      type: "Apple Mac Book 15^250 SSD 12G",
      price: "$7340",
      num: 1234567890,
      time: "12:30",
      status: "Pending",
    },
    {
      type: "Apple Mac Book 15^250 SSD 12G",
      price: "$7340",
      num: 1234567890,
      time: "12:30",
      status: "Un-reconciled",
    },
    {
      type: "Apple Mac Book 15^250 SSD 12G",
      price: "$7340",
      num: 1234567890,
      time: "12:30",
      status: "Reconciled",
    },
    {
      type: "Apple Mac Book 15^250 SSD 12G",
      price: "$7340",
      num: 1234567890,
      time: "12:30",
      status: "Un-reconciled",
    },
    {
      type: "Apple Mac Book 15^250 SSD 12G",
      price: "$7340",
      num: 1234567890,
      time: "12:30",
      status: "Pending",
    },
  ]);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item Type</th>
            <th>Price</th>
            <th>Transaction</th>
            <th colSpan="2">Time</th>
          </tr>
        </thead>
        <tbody>
          {state.map((data,index) => {
            return (
              <tr key={index}>
                <td>
                  <span className="table-index">vw</span>
                  {data.type}
                </td>
                <td>{data.price}</td>
                <td>{data.num}</td>
                <td >
                  {data.time}</td>
                  <td>
                  <button className="table-button">
                      <span className={data.status}>
                    <div
                      className="big-dot"
                    ></div>
                    {data.status}
                    </span>
                  </button>
                  <i className="down-arrow"></i>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default MainTable;
