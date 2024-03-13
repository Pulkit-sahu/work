import React from "react";
import '../styles/Forms.css' 
import { Link } from "react-router-dom";
import  { useState } from "react";
import { HiArrowRight } from "react-icons/hi";
import { HiArrowLeft } from "react-icons/hi";

const MultiPartForm = () => {
    const [part, setPart] = useState(1);
    const [formData, setFormData] = useState({});
    const [submitted, setSubmitted] = useState(false);
    const [progBar,setProgBar]=useState(0);
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      setSubmitted(true);
    };
  
    const nextPart = (e) => {
      e.preventDefault();
      setPart(part + 1);
    };
  
    const prevPart = () => {
      setPart(part - 1);
    }; 

return (
    <div className="main">
    <div className="multi-part-form">
      <div className="progress-bar">
        <p className={part==1 ? 'hilite' : 'hilite'}>About you</p>
        <p className={part==2 ? 'hilite' : ''}>Experience</p>
      </div>

      <div className="bar-prog">
        <div className="per">{part==1? "50%"  : part>1? "100%" :""}</div>
        <div className="innerbar" style={{width:part>1?"100%":"50%"}}></div>
      </div>
      <div className="form-container">
        {!submitted && (
          <>
            {part === 1 && (
              <form onSubmit={handleSubmit}>
                <label htmlFor="name">Before we start, can we have your name?:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  onChange={handleChange}
                  required
                />
                <label htmlFor="email">And Your Email ID :</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  required
                />
                
                <button type="submit" onClick={nextPart}>Next       <HiArrowRight /> </button>
                
              </form>
            )}
            {part === 2 && (
              <form onSubmit={handleSubmit}>

                <label htmlFor="address">Interest Area:</label>
                <textarea
                  id="address"
                  name="address"
                  onChange={handleChange}
                  required
                ></textarea>
                <label htmlFor="phone">Experience :</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  required
                />
                
                <button type="submit">Submit</button>
                <button onClick={prevPart}><HiArrowLeft />  Previous</button>
              </form>
            )}
          </>
        )}
        {submitted && <p>Thanks for your time!</p>}
      </div>
      
    </div>
    <div>
    <footer className="New-footer">
      <p1>Copyright © 2024 @Pulkit</p1>
    </footer>
  </div>
    </div>
    
  );

}

export default MultiPartForm;