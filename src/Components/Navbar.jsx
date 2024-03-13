import React, { useState } from "react";
import Logo from "../assets/small.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoReorderThreeSharp } from "react-icons/io5";
import "../styles/Navbar.css";
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
        <div className="hiddenLinks">
          <Link to="/"> Home </Link>
          <Link to="/Menu"> Our Serivces </Link>
          <Link to="/About"> About </Link>
          <Link to="/Contact"> Contact </Link>
        </div>
      </div>
      <div className="rightSide">

          
        
        <Link to="/Menu"> 
        Our Serivces
        <div className="dropdownlinks">
          <Link > Career Counseling </Link>
          <Link > Career Guidance </Link>
          <Link > Career Assessments</Link>
          <Link > One to One Session </Link>
          <Link > Skill Test </Link>

        </div>
        </Link> 
        <div className="button-container">
        <Link to="/Forms" className="button">
        Take Career Counseling
        </Link>
        </div>

        <Link to="Contact"><IoMdCall /> </Link>
        <Link to="/About"> <FaRegUserCircle /> </Link>
        
        <button onClick={toggleNavbar}>
        <IoReorderThreeSharp />
        </button>
      </div>
    </div>
  );
}

export default Navbar;
