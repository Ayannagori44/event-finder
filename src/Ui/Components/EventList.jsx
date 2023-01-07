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
      <div className="flex flex-wrap justify-center sm:justify-evenly items-start">
        {events.map((event, index) => {
          return <EventCard list={true} info={event} key={index} />;
        })}
      </div>
      {/*  */}
      {/*  */}
      {/*  */}

      <h1 className="py-4 text-center sm:text-left sm:py-8 text-2xl md:text-4xl">
        {title}
      </h1>
      <div className="flex flex-wrap justify-center sm:justify-evenly items-start">
        {events.map((event, index) => {
          return <EventCard info={event} key={index} />;
        })}
      </div>
    </section>
  );
};

export default EventList;
