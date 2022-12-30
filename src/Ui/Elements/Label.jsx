import React from "react";

const Label = ({ htmlFor, classes, title }) => {
  return (
    <label className={`mr-4 ${classes ? classes : ""}`} htmlFor={htmlFor}>
      {title}:
    </label>
  );
};

export default Label;
