import React from "react";

const Input = ({ name, setLocation, location }) => {
  return (
    <div className=" flex items-end">
      {console.log(setLocation, location)}
      <h2 className="mr-4">{name}:</h2>
      <input
        required
        className="outline-0 text-primary-color font-semibold text-xl bg-transparent"
        type="text"
        placeholder="Hydrabad"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </div>
  );
};

export default Input;
