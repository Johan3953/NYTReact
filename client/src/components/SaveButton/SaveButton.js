import React from "react";

// Destructuring the type, className, children and onClick props, applying them to the button element
const SaveButton = ({ type, className, children, onClick }) => (
  <button
    onClick={onClick}
    className={`btn btn-${type ? type : "warning"}${className
      ? " " + className
      : ""}`}
  >
    {children}
  </button>
);

export default SaveButton;
