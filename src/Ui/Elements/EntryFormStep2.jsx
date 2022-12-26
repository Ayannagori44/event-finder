import React, { useState } from "react";

import Input from "../Components/Input";
import Dropdown from "../Components/Dropdown";
import Tabs from "../Components/Tabs";

import { useStore } from "../../Store/zustand";

const EntryFormStep1 = ({ setStep }) => {
  // Getting initial state and their set state functions from the zustand store
  const {
    type,
    setType,

    category,
    setCategory,

    location,
    setLocation,

    ageRange,
    setAgeStart,
    setAgeEnd,

    datetime,
    setDate,
    setTime,
  } = useStore((state) => state);

  return (
    <form className="step-1">
      <div className="flex items-center">
        <Input
          name="Location"
          placeHolder="Mumbai"
          setValue={setLocation}
          value={location}
        />
      </div>

      <div className=" my-8 items-center flex">
        <Input
          min="0"
          max="100"
          name="Age-range"
          type="number"
          classes="w-[70px]"
          placeHolder="any"
          value={ageRange.start}
          setValue={setAgeStart}
        />
        <h3 className="mx-3">To</h3>
        <Input
          min="1"
          max="100"
          type="number"
          classes="w-[70px]"
          placeHolder="any"
          value={ageRange.end}
          setValue={setAgeEnd}
        />
      </div>

      {/* dropdown */}
      <Dropdown label={"Type"} value={category} setValue={setCategory} />

      <div className="my-10 flex items-center">
        <Input
          name="Date-Time"
          type="date"
          classes="text-grey"
          value={datetime.date}
          setValue={setDate}
        />
        <Input
          type="time"
          classes="text-grey"
          value={datetime.time}
          setValue={setTime}
        />
      </div>

      <div className="my-10 flex items-center">
        <Tabs value={type} setValue={setType} />
      </div>

      <button
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          setStep((prevState) => prevState + 1);
        }}
      >
        Next
      </button>
    </form>
  );
};

export default EntryFormStep1;
