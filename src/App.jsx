import { useState, useEffect } from "react";

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

  useEffect(() => {
    const oldPage = parseInt(localStorage.getItem("page")) || 1;

    // Personal Information Old Values
    const oldFirstName = localStorage.getItem("firstName") || "";
    const oldMiddleName = localStorage.getItem("middleName") || "";
    const oldLastName = localStorage.getItem("lastName") || "";
    const oldFatherName = localStorage.getItem("fatherName") || "";
    const oldMotherName = localStorage.getItem("motherName") || "";

    const oldContactNumber = localStorage.getItem("contactNumber") || "";
    const oldEmailAddress = localStorage.getItem("emailAddress") || "";

    const oldCollegeName = localStorage.getItem("collegeName") || "";
    const oldCollegeAddress = localStorage.getItem("collegeAddress") || "";
    const oldCollegeProgram = localStorage.getItem("collegeProgram") || "";

    setFirstName(() => oldFirstName);
    setMiddleName(() => oldMiddleName);
    setLastName(() => oldLastName);
    setFatherName(() => oldFatherName);
    setMotherName(() => oldMotherName);
    setContactNumber(() => oldContactNumber);
    setEmailAddress(() => oldEmailAddress);
    setCollegeName(() => oldCollegeName);
    setCollegeAddress(() => oldCollegeAddress);
    setCollegeProgram(() => oldCollegeProgram);
  });

  function nextStep() {
    if (page >= 1) {
      setPage((p) => p + 1);
    }
  }

  function prevStep() {
    if (page <= 3) {
      setPage((p) => p - 1);
    }
  }

  function alertMessage(text) {
    alert(text);
  }

  function page1NextStep() {
    if (firstName === "") {
      alertMessage("First Name is required!");
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
      nextStep();
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
    localStorage.clear();
    setPage((p) => 1);

    // Empty state values
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
    const first_name = e.target.value;
    setFirstName(() => first_name);
    localStorage.setItem("firstName", first_name);
  }

  function handleMiddleName(e) {
    const middle_name = e.target.value;
    setMiddleName(() => middle_name);
    localStorage.setItem("middleName", middle_name);
  }

  function handleLastName(e) {
    const last_name = e.target.value;
    setLastName(() => last_name);
    localStorage.setItem("lastName", last_name);
  }

  function handleFatherName(e) {
    const father_name = e.target.value;
    setFatherName(() => father_name);
    localStorage.setItem("fatherName", father_name);
  }

  function handleMotherName(e) {
    const mother_name = e.target.value;
    setMotherName(() => mother_name);
    localStorage.setItem("motherName", mother_name);
  }

  function handleContactNumber(e) {
    const contact_number = e.target.value;
    setContactNumber(() => contact_number);
    localStorage.setItem("contactNumber", contact_number);
  }

  function handleEmailAddress(e) {
    const email_address = e.target.value;
    setEmailAddress(() => email_address);
    localStorage.setItem("emailAddress", email_address);
  }

  function handleCollegeName(e) {
    const college_name = e.target.value;
    setCollegeName(() => college_name);
    localStorage.setItem("collegeName", college_name);
  }

  function handleCollegeAddress(e) {
    const college_address = e.target.value;
    setCollegeAddress(() => college_address);
    localStorage.setItem("collegeAddress", college_address);
  }

  function handleCollegeProgram(e) {
    const college_program = e.target.value;
    setCollegeProgram(() => college_program);
    localStorage.setItem("collegeProgram", college_program);
  }

  switch (page) {
    case 1:
      return (
        <div className="container mt-5">
          <h1 className="text-center py-3">Multi-Step Form</h1>
          <div className="card p-3 my-3">
            <h3 className="card-title mb-3">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">Step {page}</li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Personal Information
                  </li>
                </ol>
              </nav>
            </h3>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 align-items-start">
              <div className="mb-3 col">
                <label for="firstName" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="firstName"
                  placeholder="Ex. Emmar"
                  value={firstName}
                  onChange={(e) => handleFirstName(e)}
                />
              </div>

              <div className="mb-3 col">
                <label for="middleName" className="form-label">
                  Middle Name (optional)
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="middleName"
                  placeholder="Ex. Baracina"
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
                  placeholder="Ex. Caber"
                  value={lastName}
                  onChange={(e) => handleLastName(e)}
                />
              </div>
            </div>

            <div className="mb-3">
              <label for="fatherName" className="form-label">
                Father's Name
              </label>
              <input
                type="text"
                className="form-control"
                id="fatherName"
                placeholder="Ex. Emmar Baracina Caber"
                value={fatherName}
                onChange={(e) => handleFatherName(e)}
              />
            </div>

            <div className="mb-3">
              <label for="motherName" className="form-label">
                Mother's Maiden Name
              </label>
              <input
                type="text"
                className="form-control"
                id="motherName"
                placeholder="Ex. Emmar Caber Baracina"
                value={motherName}
                onChange={(e) => handleMotherName(e)}
              />
            </div>

            <button
              className="btn btn-primary mt-3 py-2"
              onClick={page1NextStep}
            >
              Next
            </button>
          </div>
        </div>
      );

    case 2:
      return (
        <div className="container mt-5">
          <h1 className="text-center py-3">Multi-Step Form</h1>
          <div className="card p-3 my-3">
            <h3 className="card-title mb-3">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">Step {page}</li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Contact Information
                  </li>
                </ol>
              </nav>
            </h3>
            <div className="row align-items-start">
              <div className="mb-3">
                <label for="contactNumber" className="form-label">
                  Contact Number
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="contactNumber"
                  placeholder="Ex. 09297893496"
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
                  placeholder="Ex. name@example.com"
                  value={emailAddress}
                  onChange={(e) => handleEmailAddress(e)}
                  required
                />
              </div>

              <div className="mt-3 d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={prevStep}>
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
          <h1 className="text-center py-3">Multi-Step Form</h1>
          <div className="card p-3 my-3">
            <h3 className="card-title mb-3">
              <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                  <li class="breadcrumb-item">Step {page}</li>
                  <li class="breadcrumb-item active" aria-current="page">
                    Educational Background
                  </li>
                </ol>
              </nav>
            </h3>
            <div className="row align-items-start">
              <div className="mb-3">
                <label for="collegeName" className="form-label">
                  College Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="collegeName"
                  placeholder="Ex. Camarines Sur Polytechnic Colleges"
                  value={collegeName}
                  onChange={(e) => handleCollegeName(e)}
                  required
                />
              </div>

              <div className="mb-3">
                <label for="collegeAddress" className="form-label">
                  College Address
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="collegeAddress"
                  placeholder="Ex. San Miguel, Nabua, Camarines Sur"
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
                  placeholder="Ex. Bachelor of Science in Information Technology"
                  value={collegeProgram}
                  onChange={(e) => handleCollegeProgram(e)}
                  required
                />
              </div>

              <div className="mt-3 d-flex justify-content-between">
                <button className="btn btn-secondary" onClick={prevStep}>
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
          <h1 className="text-center py-3">Result</h1>
          <div class="card text-bg-success mb-3">
            <div class="card-header fw-bold text-uppercase">
              <h4 className="m-0">Personal Information</h4>
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
              <h4 className="m-0">Contact Information</h4>
            </div>
            <div class="card-body bg-light text-dark">
              <p>Email Address: {emailAddress}</p>
              <p>Contact Number: {contactNumber}</p>
            </div>
          </div>

          <div class="card text-bg-info mb-3">
            <div class="card-header text-light fw-bold text-uppercase">
              <h4 className="m-0">Educational Background</h4>
            </div>
            <div class="card-body bg-light text-dark">
              <p>College Name: {collegeName}</p>
              <p>Address: {collegeAddress}</p>
              <p>Program: {collegeProgram}</p>
            </div>
          </div>

          <div class="row mx-auto">
            <button class="btn btn-primary py-3" onClick={createNew}>
              <h5 className="m-0"> + New</h5>
            </button>
          </div>
        </div>
      );
      break;
  }
}

export default App;
