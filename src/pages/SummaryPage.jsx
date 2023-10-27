import React from "react";
import { Link } from "react-router-dom";

const SummaryPage = () => {
  return (
    <div className="summaryContainer">
      <div className="userHome">
        <div className="userContainer">
          <h1 className="cen title">Add a Transaction</h1>
          <div className="transButton">
            <button className="addButtons">
              <Link to="adddeposit">Add Deposit</Link>
            </button>
            <button className="addButtons">
              <Link to="addwithdrawal">Add Withdrawal</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryPage;
