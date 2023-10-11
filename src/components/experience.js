import React, { useState } from "react";
import './styles/style.css';

function WorkExperience({ onSubmit }) {
  const [companyName, setCompanyName] = useState("");
  const [positionTitle, setPositionTitle] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [dateFrom, setDateFrom] = useState("");
  const [dateTo, setDateTo] = useState("");

  const handleSave = () => {
    onSubmit({
      companyName,
      positionTitle,
      responsibilities,
      dateFrom,
      dateTo,
    });
  };

  return (
    <div className="main-container">
      <h2>Work Experience</h2>
      <input
        type="text"
        placeholder="Company Name"
        value={companyName}
        onChange={(e) => setCompanyName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Position Title"
        value={positionTitle}
        onChange={(e) => setPositionTitle(e.target.value)}
      />
      <textarea
        placeholder="Main Responsibilities"
        value={responsibilities}
        onChange={(e) => setResponsibilities(e.target.value)}
      />
      <input
        type="date"
        placeholder="Start Date"
        value={dateFrom}
        onChange={(e) => setDateFrom(e.target.value)}
      />
      <input
        type="date"
        placeholder="End Date"
        value={dateTo}
        onChange={(e) => setDateTo(e.target.value)}
      />
      <button onClick={handleSave}>Submit</button>
    </div>
  );
}

export default WorkExperience;




