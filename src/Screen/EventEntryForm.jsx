import React, { useState } from "react";

import StepShower from "../Ui/Components/StepShower";

import EntryFormStep1 from "../Ui/Components/EntryFormStep1";
import EntryFormStep2 from "../Ui/Components/EntryFormStep2";
import EntryFormStep3 from "../Ui/Components/EntryFormStep3";

const EventEntryForm = () => {
  const [step, setStep] = useState(1); // number of step like 1,2 or 3
  const isMobile = window.screen.width < 640;

  return (
    <section className="min-h-screen flex items-center justify-center gradient ">
      <div className="my-2 py-5 px-4 sm:py-8 md:px-8 shadow-xl w-[600px] max-w-[96%] rounded-2xl bg-light1">
        {/* Step Shower */}
        {!isMobile && <StepShower step={step} setStep={setStep} />}

        <h1
          className={`relative text-primary-color mb-8 text-center sm:text-left md:text-2xl lg:text-3xl ${
            isMobile ? "" : "add-line"
          }`}
        >
          {step === 1 && "Upload Event"}
          {step === 2 && "Details"}
          {step === 3 && "Contact"}
        </h1>

        {/* Form Steps -- Total 3 steps  */}

        {step === 1 && <EntryFormStep1 setStep={setStep} />}
        {step === 2 && <EntryFormStep2 setStep={setStep} />}
        {step === 3 && <EntryFormStep3 setStep={setStep} />}
      </div>
    </section>
  );
};

export default EventEntryForm;
