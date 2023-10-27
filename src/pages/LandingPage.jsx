import React from "react";
import { Link } from "react-router-dom";

const LandingPage = () => {
  return (
    <div className="flex" style={{ height: "100vh", alignItems: "center" }}>
      <div className="landing">
        <h2 className="title">Welcome</h2>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <button className="userButtons">
            <Link to="/register">Register</Link>
          </button>
          <button className="userButtons">
            <Link to="/login">Log in</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
