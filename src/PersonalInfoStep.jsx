// PersonalInfoStep.js

import React from "react";

const PersonalInfoStep = ({
  formData,
  handleChange,
  handleNextStep,
  alertMessage,
}) => {
  const { firstName, middleName, lastName, fatherName, motherName } = formData;

  const handleInputChange = (e, field) => {
    handleChange(e, field);
  };

  const validateAndProceed = () => {
    if (firstName === "") {
      alertMessage("First Name is required!");
    } else if (lastName === "") {
      alertMessage("Last Name is required!");
    } else if (fatherName === "") {
      alertMessage("Father Name is required!");
    } else if (motherName === "") {
      alertMessage("Mother Name is required!");
    } else {
      handleNextStep();
    }
  };

  return (
    <div className="card p-3 my-3">
      <h3 className="card-title mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Step 1</li>
            <li className="breadcrumb-item active" aria-current="page">
              Personal Information
            </li>
          </ol>
        </nav>
      </h3>
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 align-items-start">
        <div className="mb-3 col">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            placeholder="Ex. Emmar"
            value={firstName}
            onChange={(e) => handleInputChange(e, "firstName")}
          />
        </div>

        <div className="mb-3 col">
          <label htmlFor="middleName" className="form-label">
            Middle Name (optional)
          </label>
          <input
            type="text"
            className="form-control"
            id="middleName"
            placeholder="Ex. Baracina"
            value={middleName}
            onChange={(e) => handleInputChange(e, "middleName")}
          />
        </div>

        <div className="mb-3 col">
          <label htmlFor="lastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="lastName"
            placeholder="Ex. Caber"
            value={lastName}
            onChange={(e) => handleInputChange(e, "lastName")}
          />
        </div>
      </div>

      <div className="mb-3">
        <label htmlFor="fatherName" className="form-label">
          Father's Name
        </label>
        <input
          type="text"
          className="form-control"
          id="fatherName"
          placeholder="Ex. Emmar Baracina Caber"
          value={fatherName}
          onChange={(e) => handleInputChange(e, "fatherName")}
        />
      </div>

      <div className="mb-3">
        <label htmlFor="motherName" className="form-label">
          Mother's Maiden Name
        </label>
        <input
          type="text"
          className="form-control"
          id="motherName"
          placeholder="Ex. Emmar Caber Baracina"
          value={motherName}
          onChange={(e) => handleInputChange(e, "motherName")}
        />
      </div>

      <div className="d-flex justify-content-end">
        <div>
          <button
            className="btn btn-primary mt-3 py-2"
            onClick={validateAndProceed}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfoStep;
