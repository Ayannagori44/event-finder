import React from "react";

import Input from "../Components/Input";

import { useStore } from "../../Store/zustand";
import Textarea from "../Components/Textarea";

const EntryFormStep2 = ({ setStep }) => {
  const { title, setTitle, breif, setBreif, description, setDescription } =
    useStore((state) => state);

  return (
    <form className="step-1">
      {console.log(title, breif, description)}
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

export default EntryFormStep2;
