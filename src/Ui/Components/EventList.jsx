import React from "react";

import EventCard from "../Components/EventCard";

import { BsFillBookmarkPlusFill } from "react-icons/bs";
import { events } from "../../Utils/constant";

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
      <h1 className="my-4 text-center sm:text-left sm:my-10 text-2xl md:text-4xl">
        Somthing like this for list veiw?
      </h1>
      <div className="flex flex-wrap justify-center sm:justify-between items-start">
        {events.map((info, index) => {
          return (
            <div
              key={index}
              className="relative my-3.5 mx-2 w-full flex items-center bg-background rounded-xl smooth-transition py-1.5 shadow-xl hover:shadow-lg sm:w-[400px]"
            >
              <button className="absolute top-[-1rem] left-[-1rem] flex items-center justify-center p-3 rounded-full bg-primary-color text-white cursor-pointer">
                <BsFillBookmarkPlusFill style={{ fontSize: "1.1rem" }} />
              </button>
              <div className="w-[30%] mr-2">
                <img
                  onError={(e) => handleImageLoadError(e.target)}
                  className="max-h-[full] object-cover object-center w-full rounded-xl"
                  src={info.picture}
                />
              </div>
              <div className="px-1">
                <h1 className="mb-1 text-xl">{info.title}</h1>
                <h2 className="text-primary-color my-1 text-lg">
                  {info.date} -- {info.time}
                </h2>
                <h2 className="absolute text-base top-0 right-0 bg-dark1 text-primary-color">
                  ₹ {info.fee}
                </h2>
                <p className="mt-1 text-grey text-sm sm:text-base font-semibold">
                  {info.address}
                </p>
                <span className="text-lg font-semibold">
                  {info.organization}
                </span>
              </div>
            </div>
          );
        })}
      </div>
      {/*  */}
      {/*  */}
      {/*  */}

      <h1 className="my-4 text-center sm:text-left sm:my-10 text-2xl md:text-4xl">
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