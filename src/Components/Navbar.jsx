import React, { useState } from "react";
import Logo from "../assets/small.png";
import { Link } from "react-router-dom";
import { FaRegUserCircle } from "react-icons/fa";
import { IoExit, IoReorderThreeSharp } from "react-icons/io5";
import '../styles/Navbar.css';
import { IoMdCall } from "react-icons/io";

function Navbar({doShow}) {
 
  return (
    <div className="navbar">

      <div className="leftSide">
        <h1><span>C</span>C</h1>
        <Link to="/"> Career Counseling </Link>
      </div>
      <div className="rightSide" style={{display:doShow?"flex":"none"}}>
        <h4>
          Our Serivces
          <div className="dropdownlinks">
            <Link > Career Counseling </Link>
            <Link > Career Guidance </Link>
            <Link > Career Assessments</Link>
            <Link > One to One Session </Link>
            <Link > Skill Test </Link>
          </div>
        </h4>
        <div className="button-container">
          <Link to="/Forms" className="button">
            Take Career Counseling
          </Link>
        </div>

        <div className="menuicons">
          <Link to="Contact"><IoMdCall /> </Link>
          <Link to="/About"> <FaRegUserCircle /> </Link>
          <Link><IoReorderThreeSharp /></Link>
        </div>
      </div>
      {!doShow && <Link style={{fontSize:'2em',color:"black"}} to={'/'}><IoExit/></Link>}
    </div>
  );
}

export default Navbar;
