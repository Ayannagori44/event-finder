import React from "react";

import { BsFillCalendar2DateFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";
import { AiFillHeart } from "react-icons/ai";

const EventCard = () => {
  return (
    <div className="smooth-transition mr-5 w-[300px] flex-none cursor-pointer overflow-hidden rounded-2xl bg-light1 p-2 shadow-[3px_5px_5px_rgba(0,0,0,0.1)] ">
      <div className="indicator w-full">
        <div className="indicator-item  top-10 right-10">
          <button
            onClick={(e) => saveEvent(e)}
            className="btn btn-circle bg-opacity-80"
          >
            <AiFillHeart className="fill-primary text-2xl" />
          </button>
        </div>
        <img
          className="rounded-2xl"
          src="https://placeimg.com/640/480/nature"
          alt="event card"
        />
      </div>

      <h1 className="my-2.5 whitespace-nowrap text-lg font-bold">
        International Band Music Concert
      </h1>

      <div className="flex justify-between">
        <h1 className="flex items-center whitespace-nowrap text-sm">
          <span>
            <BsFillCalendar2DateFill className="mr-1 fill-primary" />
          </span>
          12 October,22
        </h1>
        <h1 className="flex items-center whitespace-nowrap text-sm">
          <span>
            <MdLocationOn className="mr-1 fill-primary" />
          </span>
          ABC Avenue,Basni
        </h1>
      </div>

      <div className="mt-3 flex items-center justify-between">
        <div className="avatar-group flex-1 items-center -space-x-6">
          <div className="avatar">
            <div className="w-9">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="avatar">
            <div className="w-9">
              <img src="https://placeimg.com/192/192/people" />
            </div>
          </div>
          <div className="avatar placeholder">
            <div className="bg-neutral-focus text-neutral-content w-9">
              <span className="text-white">+99</span>
            </div>
          </div>
          <span className="translate-x-6 text-[10px]">Members Joined</span>
        </div>

        <button className="btn btn-sm px-3">Join Now</button>
      </div>
    </div>
  );
};

export default EventCard;
