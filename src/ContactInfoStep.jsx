// ContactInfoStep.js

import React from "react";

const ContactInfoStep = ({
  formData,
  handleChange,
  handleNextStep,
  handlePrevStep,
  alertMessage,
}) => {
  const { contactNumber, emailAddress } = formData;

  const handleInputChange = (e, field) => {
    handleChange(e, field);
  };

  const validateAndProceed = () => {
    const validNumber = /^[0-9]+$/;
    const validEmail =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (contactNumber === "") {
      alertMessage("Contact Number is required!");
    } else if (!validNumber.test(contactNumber)) {
      alertMessage("Contact Number must have digits only!");
    } else if (!validEmail.test(emailAddress)) {
      alertMessage("Email Address is invalid!");
    } else if (emailAddress === "") {
      alertMessage("Email Address is required!");
    } else {
      handleNextStep();
    }
  };

  return (
    <div className="card p-3 my-3">
      <h3 className="card-title mb-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">Step 2</li>
            <li className="breadcrumb-item active" aria-current="page">
              Contact Information
            </li>
          </ol>
        </nav>
      </h3>
      <div className="row align-items-start">
        <div className="mb-3">
          <label htmlFor="contactNumber" className="form-label">
            Contact Number
          </label>
          <input
            type="text"
            className="form-control"
            id="contactNumber"
            placeholder="Ex. 09297893496"
            value={contactNumber}
            onChange={(e) => handleInputChange(e, "contactNumber")}
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="emailAddress" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            className="form-control"
            id="emailAddress"
            placeholder="Ex. name@example.com"
            value={emailAddress}
            onChange={(e) => handleInputChange(e, "emailAddress")}
            required
          />
        </div>

        <div className="mt-3 d-flex justify-content-between">
          <button className="btn btn-secondary" onClick={handlePrevStep}>
            Previous
          </button>
          <button className="btn btn-primary" onClick={validateAndProceed}>
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactInfoStep;
