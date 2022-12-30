import React from "react";

import Input from "../Elements/Input";
import Label from "../Elements/Label";

import { useStore } from "../../Store/zustand";
import Textarea from "../Elements/Textarea";

const EntryFormStep2 = ({ setStep }) => {
  // Getting initial state and their set state functions from the zustand store

  const {
    title,
    setTitle,
    breif,
    setBreif,
    description,
    setDescription,
    duration,
    setDurationEnd,
    setDurationStart,

    ageRange,
    setAgeStart,
    setAgeEnd,
  } = useStore((state) => state);

  return (
    <form className="step-1">
      <div className="divide items-center ">
        <Label title="Title" htmlFor={"title"} />
        <Input value={title} setValue={setTitle} id="title" />
      </div>

      <div className="divide my-5 w-full">
        <Label title={"Breif"} />
        <Textarea
          id={"Breif"}
          name="Breif"
          value={breif}
          setValue={setBreif}
          high={"2"}
          maxLength={70}
        />
      </div>

      <div className="divide my-5 w-full">
        <Label title={"Description"} />
        <Textarea
          id={"Description"}
          name="description"
          value={description}
          setValue={setDescription}
          high={"3"}
          maxLength="200"
        />
      </div>

      <div className="divide my-5 w-full">
        <Label title={"Duration"} />
        <div className="flex items-center w-full">
          <Input
            id={"Duration"}
            classes=""
            name="Duration"
            type="time"
            value={duration.start}
            setValue={setDurationStart}
          />
          <h3 className="text-center flex-shrink-2">To</h3>
          <Input
            id={"Duration"}
            classes=""
            type="time"
            value={duration.end}
            setValue={setDurationEnd}
          />
        </div>
      </div>

      <div className="divide my-5">
        <Label title="Age Range" />
        <div className="flex items-center">
          <Input
            id="Age Range"
            min={0}
            max={100}
            name="Age-range"
            type="number"
            placeHolder="any"
            value={ageRange.start}
            setValue={setAgeStart}
          />
          <h3 className="text-center">To</h3>
          <Input
            id="Age Range"
            min={0}
            max={100}
            type="number"
            placeHolder="any"
            value={ageRange.end}
            setValue={setAgeEnd}
          />
        </div>
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

export default EntryFormStep2;
