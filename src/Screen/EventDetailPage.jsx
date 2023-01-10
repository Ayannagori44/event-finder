import React from "react";
import { useParams } from "react-router-dom";

import { events } from "../Utils/constant";
import {
  AiOutlineCalendar,
  AiOutlineFieldTime,
  AiOutlineHeart,
  AiOutlineDownload,
} from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";
import { GiTicket } from "react-icons/gi";

const EventDetailPage = () => {
  const { eventTitle } = useParams();
  const thisEvent = events.find((ev) => ev.title === eventTitle);

  return (
    <section>
      <div className="container pt-9">
        <div className="relative z-50 mx-auto w-full rounded-3xl lg:w-[1200px] sm:w-[80%] md:h-[380px] lg:h-[550px] flex items-center justify-center overflow-hidden">
          <div
            style={{ backgroundImage: `url(${thisEvent.picture})` }}
            className="image-blur -z-10"
          ></div>
          <img src={thisEvent.picture} className={`h-full`} />
        </div>

        <svg
          className="absolute top-0 left-0 pt-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="var(--primary-color)"
            d="M0,32L0,64L36.9,64L36.9,224L73.8,224L73.8,320L110.8,320L110.8,64L147.7,64L147.7,224L184.6,224L184.6,192L221.5,192L221.5,160L258.5,160L258.5,288L295.4,288L295.4,32L332.3,32L332.3,192L369.2,192L369.2,32L406.2,32L406.2,192L443.1,192L443.1,192L480,192L480,320L516.9,320L516.9,288L553.8,288L553.8,64L590.8,64L590.8,32L627.7,32L627.7,288L664.6,288L664.6,160L701.5,160L701.5,256L738.5,256L738.5,96L775.4,96L775.4,320L812.3,320L812.3,224L849.2,224L849.2,288L886.2,288L886.2,32L923.1,32L923.1,256L960,256L960,288L996.9,288L996.9,32L1033.8,32L1033.8,128L1070.8,128L1070.8,192L1107.7,192L1107.7,288L1144.6,288L1144.6,288L1181.5,288L1181.5,256L1218.5,256L1218.5,256L1255.4,256L1255.4,288L1292.3,288L1292.3,96L1329.2,96L1329.2,32L1366.2,32L1366.2,256L1403.1,256L1403.1,96L1440,96L1440,0L1403.1,0L1403.1,0L1366.2,0L1366.2,0L1329.2,0L1329.2,0L1292.3,0L1292.3,0L1255.4,0L1255.4,0L1218.5,0L1218.5,0L1181.5,0L1181.5,0L1144.6,0L1144.6,0L1107.7,0L1107.7,0L1070.8,0L1070.8,0L1033.8,0L1033.8,0L996.9,0L996.9,0L960,0L960,0L923.1,0L923.1,0L886.2,0L886.2,0L849.2,0L849.2,0L812.3,0L812.3,0L775.4,0L775.4,0L738.5,0L738.5,0L701.5,0L701.5,0L664.6,0L664.6,0L627.7,0L627.7,0L590.8,0L590.8,0L553.8,0L553.8,0L516.9,0L516.9,0L480,0L480,0L443.1,0L443.1,0L406.2,0L406.2,0L369.2,0L369.2,0L332.3,0L332.3,0L295.4,0L295.4,0L258.5,0L258.5,0L221.5,0L221.5,0L184.6,0L184.6,0L147.7,0L147.7,0L110.8,0L110.8,0L73.8,0L73.8,0L36.9,0L36.9,0L0,0L0,0Z"
          ></path>
        </svg>
        <div className="absolute top-0 left-0 bg-primary-color w-full h-[6rem]"></div>

        {/* Content */}
        <div className="conatainer flex justify-between mt-20">
          <div className="left w-2/3 px-10">
            <h2 className="text-lg font-bold">{thisEvent.date}</h2>
            <h1 className="text-5xl mb-4 sm:mb-8">{thisEvent.title}</h1>
            <p className="sm:text-medium text-base font-bold">
              {thisEvent.brief}
            </p>
            <h2 className="mt-3 mb-10 text-lg">
              By{" "}
              <span className="inline underline text-primary-color cursor-pointer">
                {thisEvent.organization}
              </span>
            </h2>

            <h1 className="my-12 text-xl sm:text-3xl">When And Where</h1>
            <div className="flex">
              <article className="flex mr-32">
                <div className="icon mr-5 flex items-center justify-center bg-light2 p-4 rounded-full">
                  <AiOutlineCalendar className="text-3xl text-primary-color" />
                </div>
                <div className="detail">
                  <h1>Date and time</h1>
                  <h2>
                    {thisEvent.date}, {thisEvent.time}
                  </h2>
                </div>
              </article>
              <article className="flex">
                <div className="icon mr-5 flex items-center justify-center bg-light2 p-4 rounded-full">
                  <MdLocationOn className="text-3xl text-primary-color" />
                </div>
                <div className="detail">
                  <h1>Location</h1>
                  <h2>{thisEvent.address}</h2>
                </div>
              </article>
            </div>

            <h1 className="my-12 text-xl sm:text-3xl">About this event</h1>
            <div className="flex">
              <article className="flex mr-32">
                <div className="icon mr-5 flex items-center justify-center bg-light2 p-4 rounded-full">
                  <AiOutlineFieldTime className="text-3xl text-primary-color" />
                </div>
                <div className="detail">
                  <h1>Date and time</h1>
                  <h2>
                    {thisEvent.date}, {thisEvent.time}
                  </h2>
                </div>
              </article>
              <article className="flex">
                <div className="icon mr-5 flex items-center justify-center bg-light2 p-4 rounded-full">
                  <GiTicket className="text-3xl text-primary-color" />
                </div>
                <div className="detail">
                  <h1>Location</h1>
                  <h2>{thisEvent.address}</h2>
                </div>
              </article>
            </div>
            <label className="mt-10">description</label>
            <p className="text-grey text-lg">{thisEvent.description}</p>
            <p className="text-grey text-lg">{thisEvent.description}</p>
            <p className="text-grey text-lg">{thisEvent.description}</p>
            <p className="text-grey text-lg">{thisEvent.description}</p>
            <p className="text-grey text-lg">{thisEvent.description}</p>
          </div>

          <div className="right w-1/3 px-10">
            <div className="icons flex justify-end">
              <div className="icon mr-5 flex items-center justify-center bg-light2 p-3 rounded-full">
                <AiOutlineHeart className="text-2xl text-primary-color" />
              </div>{" "}
              <div className="icon mr-5 flex items-center justify-center bg-light2 p-3 rounded-full">
                <AiOutlineDownload className="text-2xl text-primary-color" />
              </div>
            </div>
            <div className="sticky top-0 w-full border-2 border-light2 p-6 mt-10 rounded-xl">
              <div className="border-2 border-primary-color p-3.5 rounded-xl">
                <h2>{thisEvent.title}</h2>
                <span className="text-lg font-medium mt-6">
                  ₹ {thisEvent.fee}
                </span>
              </div>
              <button className="btn-submit">Reserve a spot</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailPage;
