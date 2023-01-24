import React from "react";

import { BiBookContent } from "react-icons/bi";
import { useStore } from "../../store/zustand";

const CategoryCard = ({ active, title }) => {
  const { darkMode } = useStore((state) => state);

  return (
    <button
      className={`category-btn btn btn-sm mr-4 gap-2 rounded-full px-1 pr-3 text-xs  ${
        active ? "bg-primary text-white" : "bg-light2 text-dark1"
      }`}
    >
      <BiBookContent className="height-[4rem] rounded-full bg-light3 fill-primary p-2 text-[33px]" />
      {title}
    </button>
  );
};

export default CategoryCard;
