import React from 'react'
import background from '../assets/background.png'
import { Link } from "react-router-dom";
import '../styles/Homepage.css'
const Homepages = () => {
  return (

    <div className="App">
      <div className="App-main">
        <img src={background} alt="Homepage Image" className="App-image" />
        <p>Start your Career with Career Counseling.</p>
        <Link to='/Forms'>
          <button>Take Career Counseling</button>
        </Link>
      </div>
      <footer className="App-footer">
        <p1>Copyright © 2024 @Pulkit</p1>
      </footer>
    </div>
  );
}

export default Homepages;