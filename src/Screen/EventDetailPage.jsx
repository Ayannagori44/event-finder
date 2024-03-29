import React from "react";
import { useParams } from "react-router-dom";

import { events } from "../Utils/constant";
import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlineHeart,
} from "react-icons/ai";
import { MdLocationOn, MdShare } from "react-icons/md";
import { GiTicket } from "react-icons/gi";

const EventDetailPage = () => {
  const { eventTitle } = useParams();
  const thisEvent = events.find((ev) => ev.title === eventTitle);

  return (
    <section className="container pt-4 xl:pt-9">
      <div className="relative z-50 mx-auto flex w-full items-center justify-center overflow-hidden rounded-3xl sm:w-[80%] lg:h-min xl:h-[550px] xl:w-[1200px]">
        <div
          style={{ backgroundImage: `url(${thisEvent.picture})` }}
          className="image-blur -z-10"
        ></div>
        <img src={thisEvent.picture} className={` xl:h-full`} />
      </div>
      <svg
        className="absolute top-0 left-0 hidden sm:block lg:p-16 xl:pt-24"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="var(--primary)"
          d="M0,32L0,64L36.9,64L36.9,224L73.8,224L73.8,320L110.8,320L110.8,64L147.7,64L147.7,224L184.6,224L184.6,192L221.5,192L221.5,160L258.5,160L258.5,288L295.4,288L295.4,32L332.3,32L332.3,192L369.2,192L369.2,32L406.2,32L406.2,192L443.1,192L443.1,192L480,192L480,320L516.9,320L516.9,288L553.8,288L553.8,64L590.8,64L590.8,32L627.7,32L627.7,288L664.6,288L664.6,160L701.5,160L701.5,256L738.5,256L738.5,96L775.4,96L775.4,320L812.3,320L812.3,224L849.2,224L849.2,288L886.2,288L886.2,32L923.1,32L923.1,256L960,256L960,288L996.9,288L996.9,32L1033.8,32L1033.8,128L1070.8,128L1070.8,192L1107.7,192L1107.7,288L1144.6,288L1144.6,288L1181.5,288L1181.5,256L1218.5,256L1218.5,256L1255.4,256L1255.4,288L1292.3,288L1292.3,96L1329.2,96L1329.2,32L1366.2,32L1366.2,256L1403.1,256L1403.1,96L1440,96L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"
        ></path>
      </svg>
      <div className="absolute top-0 left-0 hidden w-full bg-primary sm:block lg:h-[4rem] xl:h-[6rem]"></div>
      {/* Content */}
      <div className="mt-8 flex flex-col justify-between sm:mt-14 lg:mt-20 lg:flex-row">
        <div className="left w-full px-2 md:px-6 lg:w-2/3 xl:px-10">
          <h2 className="text-sm font-bold sm:text-lg">{thisEvent.date}</h2>
          <h1 className="mb-3 text-3xl sm:mb-8 sm:text-4xl lg:text-6xl">
            {thisEvent.title}
          </h1>
          <p className="sm:text-medium text-xs font-bold text-dark2">
            {thisEvent.brief}
          </p>
          <h2 className="mt-3 mb-10 text-sm sm:text-lg">
            By{" "}
            <span className="inline cursor-pointer text-primary underline sm:text-lg">
              {thisEvent.organization}
            </span>
          </h2>

          <h1 className="my-3 sm:my-8 sm:text-xl lg:my-12 lg:text-3xl">
            When And Where
          </h1>
          <div className="mb-10 flex flex-col sm:mb-0 sm:flex-row">
            <article className="mr-6 flex sm:mr-10 sm:mb-5 lg:mr-32">
              <div className="icon">
                <AiOutlineCalendar />
              </div>
              <div className="detail">
                <h1 className="text-base sm:text-xl">Date and time</h1>
                <h2>
                  {thisEvent.date}, {thisEvent.time}
                </h2>
              </div>
            </article>
            <article className="flex">
              <div className="icon">
                <MdLocationOn />
              </div>
              <div className="detail">
                <h1>Location</h1>
                <h2>{thisEvent.address}</h2>
              </div>
            </article>
          </div>

          <h1 className="my-3 sm:my-8 sm:text-xl lg:my-12 lg:text-3xl">
            About this event
          </h1>
          <div className="flex flex-col sm:flex-row">
            <article className="mr-6 flex items-center sm:mr-10 sm:mb-5 lg:mr-32">
              <div className="icon">
                <AiOutlineFieldTime />
              </div>
              <h2>{thisEvent.duration}</h2>
            </article>
            <article className="flex items-center">
              <div className="icon">
                <GiTicket />
              </div>
              <h2>{thisEvent.type}</h2>
            </article>
          </div>
          <label className="mt-10">description</label>
          <p className="whitespace-pre-line text-sm lg:text-lg">
            {thisEvent.description}
          </p>
        </div>

        <div className="right mb-[150px] w-full sm:mb-5 lg:w-1/3 lg:px-10">
          <div className="mt-5 flex justify-center lg:mt-0 lg:justify-end">
            <div className="icon">
              <AiOutlineHeart className="text-2xl text-primary" />
            </div>{" "}
            <div className="icon">
              <MdShare className="text-2xl text-primary" />
            </div>
          </div>
          <div className="fixed left-0 bottom-0 h-[140px] w-full border-light2 bg-light2 p-2.5 lg:sticky lg:top-0 lg:mt-10 lg:h-min lg:bg-transparent lg:p-6">
            <div className="flex items-center justify-between rounded-xl border-2 border-primary p-3.5 lg:block">
              <h2>{thisEvent.title}</h2>
              <span className="text-lg font-medium lg:mt-6">
                ₹ {thisEvent.fee}
              </span>
            </div>
            <button className="mx-auto mt-2 flex rounded-full bg-primary px-5 py-2 text-lg text-white sm:mt-8 lg:w-max lg:px-8 lg:py-3 lg:text-xl">
              Reserve a spot
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailPage;
