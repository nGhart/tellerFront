import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";
import Menu from "../components/Menu";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="top">
        <Navigation />
        <Menu />
      </div>
      <div className="mid">
        <div className="mainContent">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
