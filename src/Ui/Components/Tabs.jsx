import React from "react";

const Tabs = ({ value, setValue }) => {
  return (
    <>
      {["Indoor", "Outdoor"].map((el) => {
        return (
          <button
            key={el}
            onClick={(e) => {
              e.preventDefault();
              setValue(e.target.innerText);
            }}
            className={`${el} smooth-transition text-lg py-1 px-4 bg-light2 text-dark2 rounded-[200px] ${
              value === `${el}` ? "active" : ""
            }`}
          >
            {el}
          </button>
        );
      })}
    </>
  );
};

export default Tabs;
