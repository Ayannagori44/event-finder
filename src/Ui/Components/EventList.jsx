import React from "react";

import EventCard from "../Components/EventCard";

import { events } from "../../Utils/constant";

const EventList = ({ title }) => {
  return (
    <section className="min-w-[82%] max-w-[95%] mx-auto">
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
