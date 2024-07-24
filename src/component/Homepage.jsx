import React from 'react';
import './Homepage.css'; // Import CSS for styling

const Homepage = () => {
  return (
    <div className="homepage-container">
      <h1 className="title">ECHO-CARDIOGRAPHY REPORT</h1>
      <form className="form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="patientName">Patient Name:</label>
            <input type="text" id="patientName" placeholder="Enter patient name" />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age & Gender:</label>
            <input type="text" id="age" placeholder="Enter age" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="referredBy">Referred By:</label>
            <input type="text" id="referredBy" placeholder="Enter referring doctor" />
          </div>
          <div className="form-group">
            <label htmlFor="date">Date:</label>
            <input type="date" id="date" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Homepage;