import React from "react";
//import Logout from "./Logout";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/dashboard">
        <h1 className="logo">TellerApp</h1>
      </Link>
      {/* <Logout /> */}
    </div>
  );
};

export default Navigation;
