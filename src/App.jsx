import React, { useState } from "react";
import PersonalInfoStep from "./PersonalInfoStep";

function App() {
  const [page, setPage] = useState(1);

  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    fatherName: "",
    motherName: "",
    contactNumber: "",
    emailAddress: "",
    collegeName: "",
    collegeAddress: "",
    collegeProgram: "",
  });

  const handleChange = (e, field) => {
    const value = e.target.value;
    setFormData((prevData) => ({ ...prevData, [field]: value }));
    localStorage.setItem(field, value);
  };

  const handleNextStep = () => {
    setPage((prevPage) => prevPage + 1);
  };

  const handlePrevStep = () => {
    setPage((prevPage) => prevPage - 1);
  };

  const handleSubmit = () => {
    handleNextStep();
  };

  const handleCreateNew = () => {
    localStorage.clear();
    setPage(1);
    setFormData({
      firstName: "",
      middleName: "",
      lastName: "",
      fatherName: "",
      motherName: "",
      contactNumber: "",
      emailAddress: "",
      collegeName: "",
      collegeAddress: "",
      collegeProgram: "",
    });
  };

  const alertMessage = (text) => {
    alert(text);
  };

  const renderStep = () => {
    switch (page) {
      case 1:
        return (
          <PersonalInfoStep
            formData={formData}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            alertMessage={alertMessage}
          />
        );
    }
  };

  return <div className="container mt-5">{renderStep()}</div>;
}

export default App;
