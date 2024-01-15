// ResultDisplay.js

import React from "react";

const ResultDisplay = ({ formData, handleCreateNew }) => {
  const {
    firstName,
    middleName,
    lastName,
    fatherName,
    motherName,
    contactNumber,
    emailAddress,
    collegeName,
    collegeAddress,
    collegeProgram,
  } = formData;

  return (
    <div className="container mt-5">
      <h1 className="text-center py-3">Result</h1>
      <div className="card text-bg-success mb-3">
        <div className="card-header fw-bold text-uppercase">
          <h4 className="m-0">Personal Information</h4>
        </div>
        <div className="card-body bg-light text-dark">
          <p>
            Name: {firstName} {middleName} {lastName}
          </p>
          <p>Father's Name: {fatherName}</p>
          <p>Mother's Name: {motherName}</p>
        </div>
      </div>
      <div className="card text-bg-warning mb-3">
        <div className="card-header fw-bold text-uppercase">
          <h4 className="m-0">Contact Information</h4>
        </div>
        <div className="card-body bg-light text-dark">
          <p>Email Address: {emailAddress}</p>
          <p>Contact Number: {contactNumber}</p>
        </div>
      </div>

      <div className="card text-bg-info mb-3">
        <div className="card-header text-light fw-bold text-uppercase">
          <h4 className="m-0">Educational Background</h4>
        </div>
        <div className="card-body bg-light text-dark">
          <p>College Name: {collegeName}</p>
          <p>Address: {collegeAddress}</p>
          <p>Program: {collegeProgram}</p>
        </div>
      </div>

      <div className="row mx-auto">
        <button className="btn btn-primary py-3" onClick={handleCreateNew}>
          <h5 className="m-0"> + New</h5>
        </button>
      </div>
    </div>
  );
};

export default ResultDisplay;
