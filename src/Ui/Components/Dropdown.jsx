import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

import { categories } from "../../Utils/constant";

const Dropdown = ({ value, setValue, label }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="flex relative items-end">
      <label className="mr-4">{label}:</label>

      <button
        onClick={(e) => {
          e.preventDefault();
          setDropdown(!dropdown);
        }}
        className="text-primary"
      >
        <h3
          className={`flex items-end font-semibold text-lg ${
            value === "select" ? "text-grey" : "text-primary-color"
          }`}
        >
          {value}
          <AiOutlineDown
            className={`ml-2 smooth-transition text-xl ${
              dropdown ? "" : "rotate-[-180deg]"
            }  ${value === "select" ? "text-grey" : "text-primary-color"}`}
          />
        </h3>
      </button>
      <div
        className={`smooth-transition rounded-xl bg-light1 pl-5 shadow-lg w-[180px] drop-down flex flex-col items-start absolute top-8 left-10 ${
          dropdown ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        {categories.map((catego) => {
          return (
            <button
              onClick={(e) => {
                e.preventDefault();
                setValue(e.target.innerText);
                setDropdown(false);
              }}
              key={catego}
              className="smooth-transition text-lg hover:translate-x-2 hover:scale-105 hover:text-primary-color "
            >
              {catego}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Dropdown;
