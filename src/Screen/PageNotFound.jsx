import React from "react";

import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div className="error-bg flex min-h-screen items-center justify-center bg-light1 bg-cover bg-fixed bg-bottom">
      <div className="-mt-[250px] justify-center text-center text-dark1">
        <div className="relative">
          <h1 className=" tracking-tighter-less text-shadow -ml-20 flex items-center justify-center text-9xl font-bold">
            <span className="text-dark1">4</span>
            <span className="text-dark1">0</span>
            <span className="text-dark1">4</span>
          </h1>
          <span className="absolute -top-2 left-[100px] font-semibold text-dark1 sm:left-[180px]">
            Oops!
          </span>
        </div>
        <h5 className="font-semibold text-dark1">Page not found</h5>
        <p className="mt-2 mb-6 text-dark1">
          Looks like you are lost? we are sorry, but the page you requested was
          not found
        </p>
        <Link
          to={"/"}
          className="smooth-transition rounded-full bg-green-400 px-5 py-3 text-sm font-medium tracking-wider text-dark1 shadow-sm hover:shadow-lg"
        >
          Got to Home
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
