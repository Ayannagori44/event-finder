import React from "react";

import Input from "../Elements/Input";
import Label from "../Elements/Label";
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

    fee,
    setFee,

    pictures,
    setPictures,

    date,
    setDateStart,
    setDateEnd,
  } = useStore((state) => state);

  return (
    <form className="step-1">
      {console.log(pictures)}
      <div className="divide">
        <Label title="Location" />
        <Input
          id="Location"
          placeHolder="ex. Mumbai"
          setValue={setLocation}
          value={location}
        />
      </div>

      <div className="divide my-8">
        <Label title="Fee" />
        <Input id="Fee" type={"number"} setValue={setFee} value={fee} />
      </div>

      <div className="divide my-8">
        <Label title="Pictures" />
        <Input
          type="file"
          setValue={setPictures}
          id="Pictures"
          more={true}
          classes="w-[320px] border-transparent p-0 font-medium"
        />
      </div>

      <div className="divide mb-8">
        <Label title="Date" />
        <div className="flex items-center">
          <Input
            id="Date"
            type="date"
            value={date.start}
            setValue={setDateStart}
          />
          <h3>To</h3>
          <Input id="Date" type="date" value={date.end} setValue={setDateEnd} />
        </div>
      </div>

      <div className="divide">
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
