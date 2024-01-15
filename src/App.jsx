import React, { useState, useEffect } from "react";
import PersonalInfoStep from "./PersonalInfoStep";
import ContactInfoStep from "./ContactInfoStep";
import EducationalBackgroundStep from "./EducationalBackgroundStep";
import ResultDisplay from "./ResultDisplay";

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

  useEffect(() => {
    const storedPage = parseInt(localStorage.getItem("page")) || 1;

    const storedFormData = {
      firstName: localStorage.getItem("firstName") || "",
      middleName: localStorage.getItem("middleName") || "",
      lastName: localStorage.getItem("lastName") || "",
      fatherName: localStorage.getItem("fatherName") || "",
      motherName: localStorage.getItem("motherName") || "",
      contactNumber: localStorage.getItem("contactNumber") || "",
      emailAddress: localStorage.getItem("emailAddress") || "",
      collegeName: localStorage.getItem("collegeName") || "",
      collegeAddress: localStorage.getItem("collegeAddress") || "",
      collegeProgram: localStorage.getItem("collegeProgram") || "",
    };

    setPage(storedPage);
    setFormData(storedFormData);
  }, []);

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

      case 2:
        return (
          <ContactInfoStep
            formData={formData}
            handleChange={handleChange}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            alertMessage={alertMessage}
          />
        );

      case 3:
        return (
          <EducationalBackgroundStep
            formData={formData}
            handleChange={handleChange}
            handlePrevStep={handlePrevStep}
            handleSubmit={handleSubmit}
            alertMessage={alertMessage}
          />
        );

      default:
        return (
          <ResultDisplay
            formData={formData}
            handleCreateNew={handleCreateNew}
          />
        );
    }
  };

  return <div className="container mt-5">{renderStep()}</div>;
}

export default App;
