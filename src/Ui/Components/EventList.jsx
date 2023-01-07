import React from "react";

import EventCard from "../Components/EventCard";
import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { events } from "../../Utils/constant";
import { Link } from "react-router-dom";

const EventList = ({ title }) => {
  const handleImageLoadError = function (target) {
    target.src =
      "https://dummyimage.com/350x350/cacfe3/1e2ad6.png&text=Image+Not+Found";
  };
  return (
    <section className="min-w-[82%] max-w-[95%] mx-auto">
      {/*  */}
      {/*  */}
      {/*  */}
      <h1 className="py-4 text-center sm:text-left sm:py-8 text-2xl md:text-4xl">
        Something like this for list veiw?
      </h1>
      <div className="flex flex-wrap justify-center sm:justify-between items-start">
        {events.map((info, index) => {
          return (
            <Link
              to={`/EventDetail/${info.title}`}
              key={index}
              className="relative my-3.5 mx-2 w-full flex items-center bg-background rounded-xl smooth-transition py-1.5 shadow-xl hover:shadow-lg sm:w-[400px]"
            >
              <button className="absolute top-0 left-0 flex items-center justify-center p-2 sm:p-3 rounded-full bg-primary-color text-white cursor-pointer -translate-x-1/2 -translate-y-1/2">
                <BsFillBookmarkPlusFill className="text-base sm:text-lg" />
              </button>
              <div className="w-[40%] mr-2">
                <img
                  onError={(e) => handleImageLoadError(e.target)}
                  className="max-h-[full] object-cover object-center w-full rounded-xl"
                  src={info.picture}
                />
              </div>
              <div className="px-1">
                <h1 className="text-lg sm:text-xl">{info.title}</h1>
                <h2 className="text-primary-color text-base">
                  {info.date} -- {info.time}
                </h2>
                <h2 className="absolute top-0 -right-1 text-xs bg-background border-2 border-primary-color rounded-full px-1.5 py-1 text-primary-color -translate-y-1/2">
                  ₹ {info.fee}
                </h2>
                <p className="text-grey text-sm sm:text-base font-semibold">
                  {info.address}
                </p>
                <span className="text-sm sm:text-base font-semibold">
                  {info.organization}
                </span>
              </div>
            </Link>
          );
        })}
      </div>
      {/*  */}
      {/*  */}
      {/*  */}

      <h1 className="py-4 text-center sm:text-left sm:py-8 text-2xl md:text-4xl">
        {title}
      </h1>
      <div className="flex flex-wrap justify-center sm:justify-between items-start">
        {events.map((event, index) => {
          return <EventCard info={event} key={index} />;
        })}
      </div>
    </section>
  );
};

export default EventList;
