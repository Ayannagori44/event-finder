import React from "react";

const StepShower = ({ step }) => {
  return (
    <div className="mb-6 sm:mb-8 flex items-start justify-center">
      <article className={`w-1/3 ${step >= 1 ? "step" : ""}`}>
        <div className="line1 smooth-transition w-full h-[13px] bg-grey "></div>
        <h2 className="px-4 text-grey ">
          1 <span className="opacity-0 text-sm font-medium">- get started</span>
        </h2>
      </article>
      <article className={`w-1/3 ${step >= 2 ? "step" : ""}`}>
        <div className="line2 smooth-transition w-full h-[13px] bg-grey border-x-4 border-x-transparant"></div>
        <h2 className="leading-none px-4 text-grey ">
          2 <span className="opacity-0 text-sm font-medium">- Half done</span>
        </h2>
      </article>
      <article className={`w-1/3 ${step >= 3 ? "step" : ""}`}>
        <div className="line3 smooth-transition w-full h-[13px] bg-grey "></div>

        <h2 className="leading-none px-4 text-grey ">
          3{" "}
          <span className="opacity-0 text-sm font-medium">- Great! Done!</span>
        </h2>
      </article>
    </div>
  );
};

export default StepShower;
