import React, { useState } from "react";
import GeneralInfo from "./components/personalDetails";
import Education from "./components/education";
import WorkExperience from "./components/experience";
import "./App.css";
import Header from "./components/header";


function App() {
  const [cvData, setCvData] = useState({
    general: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
    },
    education: {
      schoolName: "",
      studyTitle: "",
      dateOfStudy: "",
    },
    workExperience: {
      companyName: "",
      positionTitle: "",
      responsibilities: "",
      dateFrom: "",
      dateTo: "",
    },
  });

  const handleGeneralInfoSave = (data) => {
    setCvData({
      ...cvData,
      general: data,
    });
  };

  const handleEducationSave = (data) => {
    setCvData({
      ...cvData,
      education: data,
    });
  };

  const handleExperienceSave = (data) => {
    setCvData({
      ...cvData,
      workExperience: data,
    });
  };
  

  return (
    <div className="App">
      <Header className="custom-header"/>
      <div className="left-section">
        <GeneralInfo onSubmit={handleGeneralInfoSave} />
        <Education onSubmit={handleEducationSave} />
        <WorkExperience onSubmit={handleExperienceSave} />
      </div>
      <div className="right-section">
        <h1 id="cv-details">CV DETAILS</h1>
        <div className="personal-info">
          <h1>General Information</h1>
          <div className="contact-info">
            <p>Name: {cvData.general.fullName}</p>
            <p>Email: {cvData.general.email}</p>
            <p>Phone: {cvData.general.phone}</p>
            <p>Address: {cvData.general.address}</p>
          </div>
        </div>
        <div className="educational-info">
          <h3>Educational Experience</h3>
          <p>School Name: {cvData.education.schoolName}</p>
          <p>Study Title: {cvData.education.studyTitle}</p>
          <p>Date of Study: {cvData.education.dateOfStudy}</p>
        </div>
        <div className="experience-info">
          <h3>Work Experience</h3>
          <p>Company Name: {cvData.workExperience.companyName}</p>
          <p>Job Title: {cvData.workExperience.positionTitle}</p>
          <p>Job Responsibilities: {cvData.workExperience.responsibilities}</p>
          <p>Started Job On: {cvData.workExperience.dateFrom}</p>
          <p>Job ended on: {cvData.workExperience.dateTo}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
