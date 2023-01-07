import React from "react";

import { Link } from "react-router-dom";

import { BsFillBookmarkPlusFill } from "react-icons/bs";

const EventCard = ({ info, list }) => {
  const handleImageLoadError = function (target) {
    target.src =
      "https://dummyimage.com/350x230/cacfe3/1e2ad6.png&text=Image+Not+Found";
  };
  return (
    <Link
      to={`/EventDetail/${info.title}`}
      className={`${
        list
          ? "my-3.5 mx-2 w-full sm:w-[380px] flex items-center"
          : "my-5 mx-2 w-[300px]"
      } relative shadow-xl hover:shadow-lg bg-background rounded-xl smooth-transition py-1.5`}
    >
      <button
        className={`${
          list
            ? "absolute top-0 left-0 p-2 sm:p-3 -translate-x-1/3 sm:-translate-x-1/2 -translate-y-1/2"
            : "top-[-0.8rem] right-[-0.8rem] p-3"
        } absolute flex items-center justify-center rounded-full bg-primary-color text-white cursor-pointer`}
      >
        <BsFillBookmarkPlusFill style={{ fontSize: "1.2rem" }} />
      </button>
      <div
        className={`${list ? "w-[30%] sm:w-[40%] mr-2" : "w-full h-[230px]"}`}
      >
        <img
          onError={(e) => handleImageLoadError(e.target)}
          className="max-h-[full] object-cover object-center w-full rounded-xl"
          src={info.picture}
        />
      </div>
      <div className={`${list ? "px-1 w-[70%] sm:w-[60%]" : "px-3"}`}>
        <h2 className={`${list ? "text-lg sm:text-xl" : "md:text-2xl"}`}>
          {info.title}
        </h2>
        <h2
          className={`${
            list ? "text-base" : "text-primary-color my-2 text-xl"
          } text-primary-color`}
        >
          {info.date} -- {info.time}
        </h2>
        <h2
          className={`${
            list
              ? "absolute top-0 -right-1 text-xs bg-background border-2 border-primary-color rounded-full px-1.5 py-1 text-primary-color -translate-y-1/2"
              : "text-lg"
          }`}
        >
          ₹ {info.fee}
        </h2>
        <p
          className={`${
            list ? "text-grey text-sm sm:text-base font-semibold" : "mt-4"
          }`}
        >
          {info.address}
        </p>
        <span
          className={`${
            list ? "text-sm sm:text-base" : "text-lg"
          } font-semibold`}
        >
          {info.organization}
        </span>
      </div>
    </Link>
  );
};

export default EventCard;
