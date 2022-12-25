import React from "react";

import { useStore } from "../../Store/zustand";

const Input = ({
  name,
  placeHolder,
  value,
  setValue,
  classes,
  type,
  min,
  max,
}) => {
  return (
    <>
      {name && (
        <label htmlFor={name} className={`mr-4`}>
          {name}:
        </label>
      )}
      <input
        id={name}
        required
        type={type ? type : "text"}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        min={min}
        max={max}
        placeholder={placeHolder ? placeHolder : ""}
        className={classes ? classes : ""}
      />
    </>
  );
};

export default Input;
