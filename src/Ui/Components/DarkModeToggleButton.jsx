import React from "react";

import { MdLightMode, MdDarkMode } from "react-icons/md";
import { useStore } from "../../Store/zustand";

const DarkModeToggleButton = () => {
  const { darkMode, setDarkMode } = useStore((state) => state);

  return (
    <button
      className="smooth-transition fixed bottom-2 right-2 z-10 rounded-full bg-light2 p-2 sm:bottom-7 sm:right-7"
      onClick={(e) => setDarkMode(darkMode)}
    >
      {darkMode && (
        <MdLightMode className="smooth-transition fill-dark1 text-4xl sm:text-5xl" />
      )}
      {!darkMode && (
        <MdDarkMode className="smooth-transition fill-dark1 text-4xl sm:text-5xl" />
      )}
    </button>
  );
};

export default DarkModeToggleButton;
