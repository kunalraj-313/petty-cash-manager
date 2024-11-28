import React from "react";
import { useState } from "react";
import "styles/SideBar.css";
import ArrowSvg from "../assets/icons/arrow.svg";
import { Link } from "react-router-dom";

export default function SideBar() {
  const [exapnded, toggleExpanded] = useState(true);
  return (
    <div className={exapnded ? "sidebar-expanded" : "sidebar-hidden"}>
      <div className="user-section">
        <div className="expand-btn" onClick={() => toggleExpanded(false)}>
          <img src={ArrowSvg} alt="exapnd button" />
        </div>
        <Link to={"/about"}>Test</Link>
      </div>
    </div>
  );
}
