import React from "react";
import { useParams } from "react-router-dom";

import { events } from "../Utils/constant";

const EventDetailPage = () => {
  const { eventTitle } = useParams();
  const thisEvent = events.find((ev) => ev.title === eventTitle);

  return (
    <div className="flex items-center justify-center">
      <h1>{eventTitle}</h1>
      {console.log(eventTitle, thisEvent)}
    </div>
  );
};

export default EventDetailPage;
