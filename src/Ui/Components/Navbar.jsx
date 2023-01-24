import React from "react";

import { NavLink } from "react-router-dom";

import { AiOutlineUser, AiOutlineCompass, AiOutlineHome } from "react-icons/ai";
import { SiAboutdotme } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="fixed bottom-0 left-0 z-10 w-screen bg-light2">
      <ul className="mx-auto flex w-[90%] items-center justify-between px-4 pb-3">
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/"
        >
          <AiOutlineHome className="border-t-2 border-transparent fill-dark1 py-2 pb-2 text-[44px]" />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/explore"
        >
          <AiOutlineCompass className="border-t-2 border-transparent fill-dark1 py-2 pb-2 text-[44px]" />
        </NavLink>

        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/profile"
        >
          <AiOutlineUser className="border-t-2 border-transparent fill-dark1 py-2 pb-2 text-[44px]" />
        </NavLink>
        <NavLink
          className={({ isActive }) => (isActive ? "link active" : "link")}
          to="/about"
        >
          <SiAboutdotme className="border-t-2 border-transparent fill-dark1 py-2 pb-2 text-[44px]" />
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
