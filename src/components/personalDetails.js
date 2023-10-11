import React, { useState } from "react";
import "./styles/style.css";

function GeneralInfo({ onSubmit }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  const handleSave = () => {
    onSubmit({
      fullName,
      email,
      phone,
      address,
    });
  };

  return (
    <div className="main-container">
      <h2>Personal Information</h2>
      <input
        type="text"
        placeholder="Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="tel"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      <input
        type="text"
        placeholder="Address"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
      />
      <button onClick={handleSave}>Submit</button>
    </div>
  );
}

export default GeneralInfo;

