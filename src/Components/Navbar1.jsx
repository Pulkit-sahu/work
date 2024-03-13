import React, { useState } from "react";
import Logo from "../assets/small.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoReorderThreeSharp } from "react-icons/io5";
import "../styles/Navbar1.css";
import { IoMdCall } from "react-icons/io";

function Navbar() {
  const [openLinks, setOpenLinks] = useState(false);

  const toggleNavbar = () => {
    setOpenLinks(!openLinks);
  };
  return (
    <div className="navbar">
      
      <div className="leftSide" id={openLinks ? "open" : "close"}>
        <img src={Logo} />
        <Link to="/"> Career Counseling </Link>
        <p>This Career Counseling is co-created with counselers</p>

      </div>
    </div>
  );
}

export default Navbar;
