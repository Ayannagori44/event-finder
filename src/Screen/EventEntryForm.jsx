import React, { useState } from "react";

import StepShower from "../Ui/Components/StepShower";

import EntryFormStep1 from "../Ui/Elements/EntryFormStep1";
import EntryFormStep2 from "../Ui/Elements/EntryFormStep2";
import EntryFormStep3 from "../Ui/Elements/EntryFormStep3";

const EventEntryForm = () => {
  const [step, setStep] = useState(1); // number of step like 1,2 or 3

  return (
    <section className="flex items-center justify-center gradient min-h-screen">
      <div className="p-8 shadow-xl max-h-[95%] w-[600px] max-w-[98%] rounded-2xl bg-light1">
        {/* Step Shower */}
        <StepShower step={step} setStep={setStep} />

        <h1 className="add-line relative text-primary-color mb-8">
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
