import React from "react";

import EventCard from "../Components/EventCard";
import { events } from "../../Utils/constant";

const EventList = ({ title }) => {
  const handleImageLoadError = function (target) {
    target.src =
      "https://dummyimage.com/350x350/cacfe3/1e2ad6.png&text=Image+Not+Found";
  };
  return (
    <section className="mx-auto min-w-[82%] max-w-[95%]">
      {/*  */}
      {/*  */}
      {/*  */}
      <h1 className="py-4 text-center text-2xl sm:py-8 sm:text-left md:text-4xl">
        Something like this for list veiw?
      </h1>
      <div className="flex flex-wrap items-start justify-center sm:justify-evenly">
        {events.map((event, index) => {
          return <EventCard list={true} info={event} key={index} />;
        })}
      </div>
      {/*  */}
      {/*  */}

      <h1 className="py-4 text-center text-2xl sm:py-8 sm:text-left md:text-4xl">
        {title}
      </h1>
      <div className="flex flex-wrap items-start justify-center sm:justify-evenly">
        {events.map((event, index) => {
          return <EventCard info={event} key={index} />;
        })}
      </div>
    </section>
  );
};

export default EventList;
