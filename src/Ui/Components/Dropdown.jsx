import React, { useState } from "react";
import { AiOutlineDown } from "react-icons/ai";

const Dropdown = ({ type, setType }) => {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setDropdown(!dropdown);
        }}
        className="text-primary"
      >
        <h3
          className={`flex items-end font-semibold text-lg ${
            type === "select" ? "text-grey" : "text-primary-color"
          }`}
        >
          {type}{" "}
          <AiOutlineDown
            className={`ml-2 smooth-transition text-xl ${
              dropdown ? "" : "rotate-[-180deg]"
            }  ${type === "select" ? "text-grey" : "text-primary-color"}`}
          />
        </h3>
      </button>
      <div
        className={`smooth-transition w-[180px] drop-down flex flex-col items-start absolute top-8 left-20 ${
          dropdown ? "" : "opacity-0 pointer-events-none"
        }`}
      >
        {[
          "Learning",
          "Fun",
          "Games",
          "Activities",
          "Fairs Exhibition",
          "Food&Drink",
        ].map((catego) => {
          return (
            <button
              onClick={(e) => {
                e.preventDefault();
                setType(e.target.innerText);
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
    </>
  );
};

export default Dropdown;
