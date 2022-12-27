import React from "react";

import Input from "../Components/Input";
import Textarea from "../Components/Textarea";

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
      {console.log(email, url, phone, organization, address)}

      <div className="flex items-center">
        <Input name="email" value={email} setValue={setEmail} type="email" />
      </div>

      <div className="flex my-8 items-center">
        <Input name="url" value={url} setValue={setUrl} />
      </div>

      <div className="flex items-center">
        <Input name="phone" value={phone} setValue={setPhone} type="number" />
      </div>

      <div className="flex my-8 items-center">
        <Input
          name="organization"
          value={organization}
          setValue={setOrganization}
          type="number"
        />
      </div>

      <div className="flex my-5 w-full">
        <Textarea
          name="address"
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
