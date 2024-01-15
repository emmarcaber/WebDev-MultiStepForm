// EducationalBackgroundStep.js

import React from "react";

const EducationalBackgroundStep = ({
  formData,
  handleChange,
  handlePrevStep,
  handleSubmit,
  alertMessage,
}) => {
  const { collegeName, collegeAddress, collegeProgram } = formData;

  const handleInputChange = (e, field) => {
    handleChange(e, field);
  };

  const validateAndSubmit = () => {
    if (collegeName === "") {
      alertMessage("College Name is required!");
    } else if (collegeAddress === "") {
      alertMessage("Address is required!");
    } else if (collegeProgram === "") {
      alertMessage("Program is required!");
    } else {
      alertMessage("Successfully saved in the database!");
      handleSubmit(); // Call the parent component's submit function
    }
  };

  return (
    <div className="card p-3 my-3">
      <h3 className="card-title mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Step 3</li>
            <li className="breadcrumb-item active" aria-current="page">
              Educational Background
            </li>
          </ol>
        </nav>
      </h3>
      <div className="row align-items-start">
        <div className="mb-3">
          <label htmlFor="collegeName" className="form-label">
            College Name
          </label>
          <input
            type="text"
            className="form-control"
            id="collegeName"
            placeholder="Ex. Camarines Sur Polytechnic Colleges"
            value={collegeName}
            onChange={(e) => handleInputChange(e, "collegeName")}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="collegeAddress" className="form-label">
            College Address
          </label>
          <input
            type="text"
            className="form-control"
            id="collegeAddress"
            placeholder="Ex. San Miguel, Nabua, Camarines Sur"
            value={collegeAddress}
            onChange={(e) => handleInputChange(e, "collegeAddress")}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="collegeProgram" className="form-label">
            Program
          </label>
          <input
            type="text"
            className="form-control"
            id="collegeProgram"
            placeholder="Ex. Bachelor of Science in Information Technology"
            value={collegeProgram}
            onChange={(e) => handleInputChange(e, "collegeProgram")}
            required
          />
        </div>

        <div className="mt-3 d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={handlePrevStep}>
            Previous
          </button>
          <button className="btn btn-primary" onClick={validateAndSubmit}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationalBackgroundStep;
