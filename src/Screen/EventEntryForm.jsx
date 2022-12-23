import React, { useState } from "react";

// if you would like to change gradient colors go in index.css

import formImage from "../Assets/form-image.jpg";

import Input from "../Ui/Components/Input";
import Dropdown from "../Ui/Components/Dropdown";

const EventEntryForm = () => {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("select");

  return (
    <section className="flex min-h-screen justify-center gradient items-center">
      <div className="border-[11px] border-light1  shadow-xl max-h-[95%] max-w-[95%] w-[80%] rounded-2xl bg-light1  flex">
        <div className="w-2/6">
          <img className="w-full rounded-2xl" src={formImage} alt="FormImage" />
        </div>
        <form className="w-4/6 px-8 py-5">
          <h1 className="text-primary-color mb-8">Upload Event</h1>
          <Input
            name="Location"
            setLocation={setLocation}
            location={location}
          />
          <div className="my-4 flex items-center">
            <div className="flex relative items-end">
              {/* dropdown */}
              <h2 className="mr-4">Type:</h2>
              <Dropdown type={type} setType={setType} />
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default EventEntryForm;
