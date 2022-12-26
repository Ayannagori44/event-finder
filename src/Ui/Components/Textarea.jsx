import React from "react";

const Textarea = ({
  name,
  value,
  setValue,
  high,
  wide,
  classes,
  maxLength,
}) => {
  return (
    <>
      {name && (
        <label htmlFor={name} className={`mr-4`}>
          {name}:
        </label>
      )}
      <textarea
        id={name}
        required
        value={value}
        cols={wide}
        rows={high}
        onChange={(e) => setValue(e.target.value)}
        maxLength={maxLength}
        className={classes ? `${classes} hide-scrollbar` : "hide-scrollbar"}
      />
    </>
  );
};

export default Textarea;
