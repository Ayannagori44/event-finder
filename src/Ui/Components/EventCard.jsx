import React from "react";

import { BsFillBookmarkPlusFill } from "react-icons/bs";

const EventCard = ({ info }) => {
  const handleImageLoadError = function (target) {
    target.src =
      "https://dummyimage.com/350x230/cacfe3/1e2ad6.png&text=Image+Not+Found";
  };
  return (
    <div className="my-5 mx-2 w-[300px] sm:w-[310px] shadow-xl rounded-xl ">
      <div className="relative w-full h-[230px]">
        <img
          onError={(e) => handleImageLoadError(e.target)}
          className="max-h-[full] object-cover object-center w-full rounded-xl"
          src={info.picture}
        />

        <button className="absolute top-[-1rem] right-[-1rem] flex items-center justify-center  p-4 rounded-full bg-primary-color text-white">
          <BsFillBookmarkPlusFill style={{ fontSize: "1.4rem" }} />
        </button>
      </div>
      <div className="px-3">
        <h1 className="mb-3 text-2xl">{info.title}</h1>
        <h2 className="text-primary-color my-2">
          {info.date} -- {info.time}
        </h2>
        <h2>₹ {info.fee}</h2>
        <p className="my-3 text-dark2 text-sm md:text-lg font-semibold">
          {info.address}
        </p>
        <span className="text-xl font-semibold pb-3">{info.organization}</span>
      </div>
    </div>
  );
};

export default EventCard;
