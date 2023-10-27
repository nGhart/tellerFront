import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="bigMenu">
      <div className="menuItems">
        <Link to="/dashboard">Home</Link>
        <Link to="transactions">Transactions</Link>
        <Link to="accounts">Accounts</Link>
        {/* <Link to="/dashboard">Admin</Link> */}
        <Link to="report">Daily Report</Link>
      </div>
    </div>
  );
};

export default Menu;
