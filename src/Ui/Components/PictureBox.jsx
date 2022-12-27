import React from "react";

const PictureBox = ({ name, classes }) => {
  return (
    <>
      {name && (
        <label htmlFor={name} className={`mr-4`}>
          {name}:
        </label>
      )}
      <input
        multiple
        id={name}
        required
        type="File"
        className={`w-[320px] border-transparent p-0 font-medium ${
          classes ? classes : ""
        }`}
      />
    </>
  );
};

export default PictureBox;
