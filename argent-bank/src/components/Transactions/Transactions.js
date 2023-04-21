import React, { useState } from "react";
import "./Transactions.css";

function Transactions(props) {
  const [selectedRow, setSelectedRow] = useState(null);

  return (
    <>
      <tr
        className={`transaction-row ${selectedRow === props.index ? "selected" : ""}`}
        onClick={() => setSelectedRow(selectedRow === props.index ? null : props.index)}
      > 
        <td className="chevron">
          <i className={`fa ${selectedRow === props.index ? "fa-chevron-up" : "fa-chevron-down"}`} />
          {props.date}
        </td>
        <td>{props.description}</td>
        <td>{props.amount}</td>
        <td>{props.balance}</td>
      </tr>
      {selectedRow === props.index && (
        <tr className="details">
          <td colSpan="4">
            <div>
              <p>Transaction type : Electronic</p>
              <p>Category : Food <i className="fa fa-pencil"></i></p>
              <p>Notes : <i className="fa fa-pencil"></i></p>
            </div>
          </td>
        </tr>
      )}
    </>
  );
}

export default Transactions;
