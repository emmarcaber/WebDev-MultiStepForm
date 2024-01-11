import { useState } from "react";

function App() {
  const [page, setPage] = useState(1);
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fatherName, setFatherName] = useState("");
  const [motherName, setMotherName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [collegeName, setCollegeName] = useState("");
  const [collegeAddress, setCollegeAddress] = useState("");
  const [collegeProgram, setCollegeProgram] = useState("");

  function nextStep() {
    if (page >= 1) setPage((p) => p + 1);
  }

  function prevStep() {
    if (page <= 3) setPage((p) => p - 1);
  }

  function alertMessage(text) {
    alert(text);
  }

  function page1NextStep() {
    if (firstName === "") {
      alertMessage("First Name is required!");
    } else if (middleName === "") {
      alertMessage("Middle Name is required!");
    } else if (lastName === "") {
      alertMessage("Last Name is required!");
    } else if (fatherName === "") {
      alertMessage("Father Name is required!");
    } else if (motherName === "") {
      alertMessage("Mother Name is required!");
    } else {
      nextStep();
    }
  }

  function page2NextStep() {
    if (contactNumber === "") {
      alertMessage("Contact Number is required!");
    } else if (emailAddress === "") {
      alertMessage("Email Address is required!");
    } else {
      nextStep();
    }
  }

  function page2PrevStep() {
    if (contactNumber === "") {
      alertMessage("Contact Number is required!");
    } else if (emailAddress === "") {
      alertMessage("Email Address is required!");
    } else {
      prevStep();
    }
  }

  function page3PrevStep() {
    if (collegeName === "") {
      alertMessage("College Name is required!");
    } else if (collegeAddress === "") {
      alertMessage("Address is required!");
    } else if (collegeProgram === "") {
      alertMessage("Program is required!");
    } else {
      prevStep();
    }
  }

  function submit() {
    if (collegeName === "") {
      alertMessage("College Name is required!");
    } else if (collegeAddress === "") {
      alertMessage("Address is required!");
    } else if (collegeProgram === "") {
      alertMessage("Program is required!");
    } else {
      alertMessage("Successfully saved in the database!");
      nextStep();
    }
  }

  function createNew() {
    setPage((p) => 1);

    // Back to empty values
    setFirstName("");
    setMiddleName("");
    setLastName("");
    setFatherName("");
    setMotherName("");
    setContactNumber("");
    setEmailAddress("");
    setCollegeName("");
    setCollegeAddress("");
    setCollegeProgram("");
  }

  function handleFirstName(e) {
    setFirstName(() => e.target.value);
  }

  function handleMiddleName(e) {
    setMiddleName(() => e.target.value);
  }

  function handleLastName(e) {
    setLastName(() => e.target.value);
  }

  function handleFatherName(e) {
    setFatherName(() => e.target.value);
  }

  function handleMotherName(e) {
    setMotherName(() => e.target.value);
  }

  function handleContactNumber(e) {
    setContactNumber(() => e.target.value);
  }

  function handleEmailAddress(e) {
    setEmailAddress(() => e.target.value);
  }

  function handleCollegeName(e) {
    setCollegeName(() => e.target.value);
  }

  function handleCollegeAddress(e) {
    setCollegeAddress(() => e.target.value);
  }

  function handleCollegeProgram(e) {
    setCollegeProgram(() => e.target.value);
  }

  switch (page) {
    case 1:
      return (
        <div className="container mt-5">
          <div className="card p-3 my-3">
            <h3 className="card-title mb-3">Personal Information</h3>
            <div className="row align-items-start">
              <div className="mb-3 col">
                <label for="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  value={firstName}
                  onChange={(e) => handleFirstName(e)}
                />
              </div>

              <div className="mb-3 col">
                <label for="middleName" className="form-label">
                  Middle Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="middleName"
                  value={middleName}
                  onChange={(e) => handleMiddleName(e)}
                />
              </div>

              <div className="mb-3 col">
                <label for="lastName" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="lastName"
                  value={lastName}
                  onChange={(e) => handleLastName(e)}
                />
              </div>
            </div>

            <div className="mb-3">
              <label for="fatherName" className="form-label">
                Father Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fatherName"
                value={fatherName}
                onChange={(e) => handleFatherName(e)}
              />
            </div>

            <div className="mb-3">
              <label for="motherName" className="form-label">
                Mother Name
              </label>
              <input
                type="text"
                className="form-control"
                id="motherName"
                value={motherName}
                onChange={(e) => handleMotherName(e)}
              />
            </div>

            <button className="btn btn-primary mt-3" onClick={page1NextStep}>
              Next Step
            </button>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="container mt-5">
          <div className="card p-3 my-3">
            <h3 className="card-title mb-3">Contact Information</h3>
            <div className="row align-items-start">
              <div className="mb-3">
                <label for="contactNumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  value={contactNumber}
                  onChange={(e) => handleContactNumber(e)}
                  required
                />
              </div>

              <div className="mb-3">
                <label for="emailAddress" className="form-label">
                  Email Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="emailAddress"
                  value={emailAddress}
                  onChange={(e) => handleEmailAddress(e)}
                  required
                />
              </div>

              <div className="mt-3 d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={page2PrevStep}>
                  Previous
                </button>
                <button className="btn btn-primary" onClick={page2NextStep}>
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      );

    case 3:
      return (
        <div className="container mt-5">
          <div className="card p-3 my-3">
            <h3 className="card-title mb-3">Educational Background</h3>
            <div className="row align-items-start">
              <div className="mb-3">
                <label for="collegeName" className="form-label">
                  College Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="collegeName"
                  value={collegeName}
                  onChange={(e) => handleCollegeName(e)}
                  required
                />
              </div>

              <div className="mb-3">
                <label for="collegeAddress" className="form-label">
                  Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="collegeAddress"
                  value={collegeAddress}
                  onChange={(e) => handleCollegeAddress(e)}
                  required
                />
              </div>

              <div className="mb-3">
                <label for="collegeProgram" className="form-label">
                  Program
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="collegeProgram"
                  value={collegeProgram}
                  onChange={(e) => handleCollegeProgram(e)}
                  required
                />
              </div>

              <div className="mt-3 d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={page3PrevStep}>
                  Previous
                </button>
                <button className="btn btn-primary" onClick={submit}>
                  Submit
                </button>
              </div>
            </div>
          </div>
        </div>
      );
      break;

    default:
      return (
        <div className="container mt-5">
          <div class="card text-bg-success mb-3">
            <div class="card-header fw-bold text-uppercase">
              Personal Information
            </div>
            <div class="card-body bg-light text-dark">
              <p>
                Name: {firstName} {middleName} {lastName}
              </p>
              <p>Father's Name: {fatherName}</p>
              <p>Mother's Name: {motherName}</p>
            </div>
          </div>
          <div class="card text-bg-warning mb-3">
            <div class="card-header fw-bold text-uppercase">
              Contact Information
            </div>
            <div class="card-body bg-light text-dark">
              <p>Email Address: {emailAddress}</p>
              <p>Contact Number: {contactNumber}</p>
            </div>
          </div>

          <div class="card text-bg-info mb-3">
            <div class="card-header text-light fw-bold text-uppercase">
              Educational Background
            </div>
            <div class="card-body bg-light text-dark">
              <p>College Name: {collegeName}</p>
              <p>Address: {collegeAddress}</p>
              <p>Program: {collegeProgram}</p>
            </div>
          </div>

          <div class="row mx-auto">
            <button class="btn btn-primary py-2" onClick={createNew}>
              <h5> + New</h5>
            </button>
          </div>
        </div>
      );
      break;
  }
}

export default App;
