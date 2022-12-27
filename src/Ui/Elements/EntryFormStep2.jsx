import React, { useState } from "react";

import Input from "../Components/Input";
import Dropdown from "../Components/Dropdown";
import Tabs from "../Components/Tabs";
import PictureBox from "../Components/PictureBox";

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

    fee,
    setFee,

    date,
    setDateStart,
    setDateEnd,
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

      <div className="flex my-5 items-center">
        <Input name="Fee" type={"number"} setValue={setFee} value={fee} />
      </div>

      {/* dropdown */}
      <Dropdown label={"Type"} value={category} setValue={setCategory} />

      <div className="my-5 flex items-center">
        <PictureBox name="Pictures" />
      </div>

      <div className="items-center mb-5 flex">
        <Input
          name="Date"
          type="date"
          value={date.start}
          setValue={setDateStart}
        />
        <h3 className="mx-3">To</h3>
        <Input type="date" value={date.end} setValue={setDateEnd} />
      </div>

      <div className="flex items-center">
        <Tabs value={type} setValue={setType} />
      </div>

      <button
        className="btn-submit"
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
