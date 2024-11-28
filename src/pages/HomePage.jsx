import SideBar from "components/SideBar";
import React from "react";
import "styles/HomePage.css";
import { Outlet } from "react-router-dom";

export default function HomePage() {
  return (
    <div className="homepage-container">
      <SideBar />
      <Outlet />
    </div>
  );
}
