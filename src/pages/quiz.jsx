import React, { useState } from "react";
import "../styles/quiz.css";

const MultiPartForm = () => {
  const [part, setPart] = useState(1);
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const nextPart = () => {
    setPart(part + 1);
  };

  const prevPart = () => {
    setPart(part - 1);
  };

  return (
    <div className="multi-part-form">
      <div className="progress-bar">
        <div
          className="progress"
          style={{ width: `${(part / 2) * 100}%` }}
        ></div>
      </div>
      <div className="form-container">
        {part === 1 && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              required
            />
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleChange}
              required
            />
            <button type="submit">Next</button>
          </form>
        )}
        {part === 2 && (
          <form onSubmit={handleSubmit}>
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={handleChange}
              required
            />
            <label htmlFor="address">Address:</label>
            <textarea
              id="address"
              name="address"
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit">Submit</button>
            <button onClick={prevPart}>Previous</button>
          </form>
        )}
      </div>
    </div>
  );
};

export default MultiPartForm;