import React from "react";

import Input from "../Elements/Input";
import Label from "../Elements/Label";
import Textarea from "../Elements/Textarea";

import { useStore } from "../../Store/zustand";

const EntryFormStep3 = ({ setStep }) => {
  // Getting initial state and their set state functions from the zustand store
  const {
    email,
    setEmail,
    url,
    setUrl,
    phone,
    setPhone,
    address,
    setAddress,
    organization,
    setOrganization,
  } = useStore((state) => state);

  return (
    <form className="step-1">
      <div className="divide">
        <Label title="Email" />
        <Input id="Email" value={email} setValue={setEmail} type="email" />
      </div>

      <div className="divide my-8">
        <Label title="Url" />
        <Input id="Url" value={url} setValue={setUrl} />
      </div>

      <div className="divide">
        <Label title="Phone" />
        <Input id="Phone" value={phone} setValue={setPhone} type="number" />
      </div>

      <div className="divide my-8">
        <Label title="Organization" />
        <Input
          id="Organization"
          value={organization}
          setValue={setOrganization}
        />
      </div>

      <div className="divide my-5 w-full">
        <Label title="Address" />
        <Textarea
          id="Address"
          value={address}
          setValue={setAddress}
          high={"2"}
          wide="40"
          classes={"py-1"}
          maxLength="200"
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

export default EntryFormStep3;
