import React from "react";

import { BiSearch } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import EventCard from "../Ui/Components/EventCard";

const Home = () => {
  return (
    <section className="gradient min-h-screen">
      <nav className="container flex items-center justify-between pt-5">
        <div className="flex items-center">
          <div className="indicator h-12 w-12">
            <span className="indicator-item indicator-bottom badge bottom-[6px] right-[6px] bg-emerald-500"></span>
            <div className="grid h-full w-full place-items-center">
              <img
                className="mask mask-circle h-full w-full"
                src="https://placeimg.com/160/160/arch"
              />
            </div>
          </div>
          <div className="content ml-2">
            <h1 className=" text-white">Hi, Welcome👋🏻</h1>
            <h1 className="font-bold text-white">Ayan Nagori</h1>
          </div>
        </div>

        <div className="flex flex-col items-end">
          <h1 className="text-xs text-white">Current Location</h1>
          <h1 className="flex items-center text-sm font-bold text-white">
            Basni, 230485{" "}
            <span>
              <MdLocationOn className="fill-red-500" />
            </span>
          </h1>
        </div>
      </nav>

      <div className="container flex items-center justify-between py-10">
        <form className="form-control max-w-[70%]">
          <div className="input-group rounded-2xl bg-grey2">
            <button
              type="submit"
              onClick={(e) => {
                e.preventDefault();
                console.log("sumbit");
              }}
              className="btn bg btn-square bg-transparent"
            >
              <BiSearch className="fill-white text-2xl" />
            </button>
            <input
              type="text"
              placeholder="Search…"
              className="input input-bordered bg-transparent text-white"
            />
          </div>
        </form>
        <button className="btn btn-square bg-transparent">
          <CiFilter className="rounded-2xl bg-grey2 fill-white p-2.5 text-5xl" />
        </button>
      </div>

      {/* Events Horizontal scroll */}
      <div className="Events container">
        <h1 className="mb-3 text-lg font-bold text-white">Popular Events 🔥</h1>

        <div className="hide-scrollbar flex overflow-x-scroll py-4 px-2">
          {/*  */}
          {/*  */}
          <EventCard />
          <EventCard />
          {/*  */}
          {/*  */}
        </div>
      </div>
    </section>
  );
};

export default Home;
