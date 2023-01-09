import React from "react";
import { useParams } from "react-router-dom";

import { events } from "../Utils/constant";
import { AiOutlineCalendar } from "react-icons/ai";
import { MdLocationOn } from "react-icons/md";

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
        <div className="absolute top-0 left-0 bg-primary-color w-screen h-[6rem]"></div>

        {/* Content */}
        <div className="conatainer flex justify-between mt-20">
          <div className="left w-3/4 px-4">
            <h2 className="text-lg font-bold">{thisEvent.date}</h2>
            <h1 className="text-5xl mb-4 sm:mb-8">{thisEvent.title}</h1>
            <p className="sm:text-medium text-base font-bold">
              {thisEvent.brief}
            </p>
            <h2 className="my-3 text-lg">
              By{" "}
              <span className="inline underline text-primary-color cursor-pointer">
                {thisEvent.organization}
              </span>
            </h2>

            <h1 className="my-10">When And Where</h1>
            <div className="flex justify-between">
              <article className="flex">
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
          </div>

          <div className="right w-1/4 px-4">{/* Right side */}Right Side</div>
        </div>
      </div>
    </section>
  );
};

export default EventDetailPage;
