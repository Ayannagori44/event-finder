import React from "react";

import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-primary-color bg-fixed bg-cover bg-bottom error-bg">
      <div className="justify-center text-gray-50 text-center -mt-[250px]">
        <div className="relative">
          <h1 className=" flex items-center justify-center -ml-20 text-9xl tracking-tighter-less text-shadow font-bold">
            <span className="text-gray-50">4</span>
            <span className="text-gray-50">0</span>
            <span className="text-gray-50">4</span>
          </h1>
          <span className="absolute -top-2 left-[100px] sm:left-[180px] text-gray-300 font-semibold">
            Oops!
          </span>
        </div>
        <h5 className="text-gray-300 font-semibold">Page not found</h5>
        <p className="text-gray-100 mt-2 mb-6">
          Looks like you are lost? we are sorry, but the page you requested was
          not found
        </p>
        <Link
          to={"/"}
          className="smooth-transition bg-green-400 px-5 py-3 text-sm shadow-sm font-medium tracking-wider text-gray-50 rounded-full hover:shadow-lg"
        >
          Got to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
