import React from "react";

export default function SubmitButton({ onSubmit }) {
  return (
    <div>
      <button onClick={onSubmit}>Submit CV</button>
    </div>
  );
}

// export default SubmitButton;