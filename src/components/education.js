import React, { useState } from "react";
import './styles/style.css'
function Education({ onSubmit }) {
  const [schoolName, setSchoolName] = useState("");
  const [studyTitle, setStudyTitle] = useState("");
  const [dateOfStudy, setDateOfStudy] = useState("");

  const handleSave = () => {
    onSubmit({
      schoolName,
      studyTitle,
      dateOfStudy,
    });
  };

  return (
    <div className="main-container">
      <h2>Educational Experience</h2>
      <input
        type="text"
        placeholder="School Name"
        value={schoolName}
        onChange={(e) => setSchoolName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Study Title"
        value={studyTitle}
        onChange={(e) => setStudyTitle(e.target.value)}
      />
      <input
        type="date"
        placeholder="Date of Study"
        value={dateOfStudy}
        onChange={(e) => setDateOfStudy(e.target.value)}
      />
      <button onClick={handleSave}>Submit</button>
    </div>
  );
}

export default Education;
