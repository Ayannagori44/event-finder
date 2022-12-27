import React from "react";

import Input from "../Components/Input";

import { useStore } from "../../Store/zustand";
import Textarea from "../Components/Textarea";

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
      <div className="flex items-center">
        <Input name="Title" value={title} setValue={setTitle} />
      </div>

      <div className="flex my-5 w-full">
        <Textarea
          name="Breif"
          value={breif}
          setValue={setBreif}
          high={"2"}
          wide="30"
          classes={"py-1"}
          maxLength={70}
        />
      </div>

      <div className="flex my-5 w-full">
        <Textarea
          name="description"
          value={description}
          setValue={setDescription}
          high={"3"}
          wide="40"
          classes={"py-1"}
          maxLength="200"
        />
      </div>

      <div className="my-5 items-center flex">
        <Input
          name="Duration"
          type="time"
          value={duration.start}
          setValue={setDurationStart}
        />
        <h3 className="mx-3">To</h3>
        <Input type="time" value={duration.end} setValue={setDurationEnd} />
      </div>

      <div className=" my-5 items-center flex">
        <Input
          min={1}
          max={100}
          name="Age-range"
          type="number"
          classes="w-[70px]"
          placeHolder="any"
          value={ageRange.start}
          setValue={setAgeStart}
        />
        <h3 className="mx-3">To</h3>
        <Input
          min={1}
          max={100}
          type="number"
          classes="w-[70px]"
          placeHolder="any"
          value={ageRange.end}
          setValue={setAgeEnd}
        />
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
