import React from "react";

import { Link } from "react-router-dom";

import { BsFillBookmarkPlusFill } from "react-icons/bs";

const EventCard = ({ info }) => {
  const handleImageLoadError = function (target) {
    target.src =
      "https://dummyimage.com/350x230/cacfe3/1e2ad6.png&text=Image+Not+Found";
  };
  return (
    <Link
      to={`/EventDetail/${info.title}`}
      className="relative my-5 mx-2 w-[300px] shadow-xl hover:shadow-lg bg-background rounded-xl smooth-transition py-1.5"
    >
      <button className="absolute top-[-0.8rem] right-[-0.8rem] flex items-center justify-center p-3 rounded-full bg-primary-color text-white">
        <BsFillBookmarkPlusFill style={{ fontSize: "1.2rem" }} />
      </button>
      <div className="w-full h-[230px]">
        <img
          onError={(e) => handleImageLoadError(e.target)}
          className="max-h-[full] object-cover object-center w-full rounded-xl"
          src={info.picture}
        />
      </div>
      <div className="px-3">
        <h2 className="md:text-2xl">{info.title}</h2>
        <h2 className="text-primary-color my-2 text-xl">
          {info.date} -- {info.time}
        </h2>
        <h2 className="text-xl">₹ {info.fee}</h2>
        <p className="mt-4">{info.address}</p>
        <span className="text-lg font-semibold">{info.organization}</span>
      </div>
    </Link>
  );
};

export default EventCard;
