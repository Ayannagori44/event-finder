import React, { useState } from "react";

// if you would like to change gradient colors go in index.css
//

import formImage from "../Assets/form-image.jpg";
import { AiOutlineDown } from "react-icons/ai";

const EventEntryForm = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("select");
  const [dropdown, setDropdown] = useState(false);

  return (
    <section className="flex min-h-screen justify-center gradient items-center">
      <div className="border-8 border-light1  shadow-xl max-h-[95%] min-w-[1024px] w-[70%] rounded-2xl bg-light1  flex">
        <div className="w-2/6">
          <img className="w-full rounded-2xl" src={formImage} alt="FormImage" />
        </div>
        <form className="w-4/6 p-8">
          <h1 className="text-primary-color mb-8">Upload Event</h1>
          <div className=" flex items-end">
            <h2 className="mr-4">Location:</h2>
            <input
              className="outline-0 text-primary-color font-semibold text-xl bg-transparent"
              type="text"
              placeholder="Hydrabad"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="my-4 flex items-center">
            <div className="flex relative items-end">
              <h2 className="mr-4">Type:</h2>
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
                    }  ${
                      type === "select" ? "text-grey" : "text-primary-color"
                    }`}
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
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EventEntryForm;
