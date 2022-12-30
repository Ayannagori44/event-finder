import React from "react";

const Input = ({
  id,
  placeHolder,
  value,
  setValue,
  classes,
  type,
  min,
  max,
  more,
}) => {
  return (
    <input
      id={id}
      max={max}
      min={min}
      onChange={(e) =>
        !more ? setValue(e.target.value) : setValue(e.target.files)
      }
      placeholder={placeHolder ? placeHolder : ""}
      type={type ? type : "text"}
      className={classes ? classes : ""}
      value={value ? value : ""}
      multiple={more}
      required
    />
  );
};

export default Input;
