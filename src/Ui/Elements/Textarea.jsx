import React from "react";

const Textarea = ({ id, value, setValue, high, classes, maxLength }) => {
  return (
    <textarea
      id={id}
      required
      value={value}
      rows={high}
      onChange={(e) => setValue(e.target.value)}
      maxLength={maxLength}
      className={classes ? `${classes} hide-scrollbar` : "hide-scrollbar"}
    />
  );
};

export default Textarea;
