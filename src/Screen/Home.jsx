import React from "react";

import { BiSearch } from "react-icons/bi";
import { CiFilter } from "react-icons/ci";
import { MdLocationOn } from "react-icons/md";
import EventCard from "../Ui/Components/EventCard";
import CategoryCard from "../Ui/Components/CategoryCard";
import { categories } from "../Utils/constant";

const Home = () => {
  return (
    <section className="gradient min-h-screen">
      <div className="container">
        <nav className="flex items-center justify-between pt-5">
          <div className="flex items-center">
            <div className="indicator h-10 w-10">
              <span className="indicator-item indicator-bottom badge bottom-[6px] right-[6px] bg-emerald-500"></span>
              <div className="grid h-full w-full place-items-center">
                <img
                  className="mask mask-circle h-full w-full"
                  src="https://placeimg.com/160/160/arch"
                />
              </div>
            </div>
            <div className="content ml-4">
              <h1 className="text-xs text-white">Hi, Welcome👋🏻</h1>
              <h1 className="text-base font-semibold text-white">
                Ayan Nagori
              </h1>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <h1 className="text-xs font-[200] text-white">Current Location</h1>
            <h1 className="flex items-center text-sm text-white">
              Basni, 230485
              <span>
                <MdLocationOn className="fill-red-500" />
              </span>
            </h1>
          </div>
        </nav>

        <div className="flex items-center justify-between py-10">
          <form className="form-control max-w-[280px] flex-1">
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
                className="input input-bordered bg-transparent px-2 text-white"
              />
            </div>
          </form>
          <button className="btn btn-square bg-transparent">
            <CiFilter className="rounded-2xl bg-grey2 fill-white p-2.5 text-5xl" />
          </button>
        </div>

        {/* Events Horizontal scroll */}
        <h1 className="mb-3 text-lg font-bold text-white">Popular Events 🔥</h1>
        <div className="hide-scrollbar mb-5 flex overflow-x-scroll px-0.5 py-1">
          <EventCard />
          <EventCard />
          <EventCard />
        </div>

        <h1 className="my-3 text-lg font-bold">Choose By Category ✨</h1>
        <div className="hide-scrollbar mb-5 flex overflow-x-scroll">
          {categories.map((cate, i) => (
            <CategoryCard
              key={i}
              active={i === 0 ? true : false}
              title={cate}
            />
          ))}
          <CategoryCard title={"Fun"} />
          <CategoryCard title={"Games"} />
          <CategoryCard title={"Activities"} />
          <CategoryCard title={"Fairs Exhibition"} />
          <CategoryCard title={"Food&Drinks"} />
        </div>
      </div>
    </section>
  );
};

export default Home;
