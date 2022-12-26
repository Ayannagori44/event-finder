import React, { useState } from "react";

// if you would like to change gradient colors go in index.css

import formImage from "../Assets/form-image.jpg";
import StepShower from "../Ui/Components/StepShower";

import EntryFormStep1 from "../Ui/Elements/EntryFormStep1";
import EntryFormStep2 from "../Ui/Elements/EntryFormStep2";
import EntryFormStep3 from "../Ui/Elements/EntryFormStep3";

const EventEntryForm = () => {
  const [step, setStep] = useState(1); // number of step like 1,2 or 3

  return (
    <section className="flex min-h-screen justify-center gradient items-center">
      <div className="border-[14px] border-light1 shadow-xl max-h-[95%] max-w-[95%] w-[66%] rounded-2xl bg-light1  flex">
        <div className="w-3/7">
          <img className="w-full rounded-2xl" src={formImage} alt="FormImage" />
        </div>
        <div className="w-4/6 px-8 py-4 ">
          {/* Step Shower */}
          <StepShower step={step} setStep={setStep} />

          <h1 className="add-line relative text-primary-color mb-8">
            Upload Event
          </h1>

          {/* Form Steps -- Total 3 steps  */}

          {step === 1 && <EntryFormStep1 setStep={setStep} />}
          {step === 2 && <EntryFormStep2 setStep={setStep} />}
          {step === 3 && <EntryFormStep3 setStep={setStep} />}
        </div>
      </div>
    </section>
  );
};

export default EventEntryForm;
