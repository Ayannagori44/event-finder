import React from "react";

import { BsFillCalendar2DateFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const EventCard = () => {
  return (
    <div className="smooth-transition mr-5 w-[300px] flex-none cursor-pointer overflow-hidden rounded-2xl bg-light1 p-2 shadow-lg">
      <div className="img-box relative">
        <img
          className="rounded-2xl"
          src="https://placeimg.com/640/480/nature"
          alt="event card"
        />
      </div>

      <h1 className="my-3 whitespace-nowrap text-xl font-bold">
        International Band Music Concert
      </h1>

      <div className="flex justify-between">
        <h1 className="font-xs flex items-center">
          <span>
            <BsFillCalendar2DateFill className="fill-primary" />
          </span>
          12 October,22
        </h1>
        <h1 className="font-xs flex items-center">
          <span>
            <MdLocationOn className="fill-primary" />
          </span>
          ABC Avenue,Basni
        </h1>
      </div>

      <div className="mt-4 flex justify-between">
        <div className="avatar-group -space-x-6">
          <div className="avatar">
            <div className="w-10">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-10">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content w-10">
              <span className="text-white">+99</span>
            </div>
          </div>
        </div>

        <button className="btn">Join Now</button>
      </div>
    </div>
  );
};

export default EventCard;
