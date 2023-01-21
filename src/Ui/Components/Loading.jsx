import React from "react";

import logoBlack from "../../Assets/logo-dark.png";
import logoWhite from "../../Assets/logo-white.png";

import { useStore } from "../../Store/zustand";

const Loading = () => {
  const { darkMode } = useStore((state) => state);

  return (
    <div className="relative flex h-screen items-start justify-center">
      <div className="flex w-56 flex-col items-start justify-center pt-32">
        <img
          className="w-[100%]"
          src={darkMode ? logoWhite : logoBlack}
          alt="logo"
        />
        <lottie-player
          src="https://assets9.lottiefiles.com/packages/lf20_rlzitsb5.json"
          background="transparent"
          speed="0.9"
          style={{ width: "100%", height: "350px" }}
          loop
          autoplay
        ></lottie-player>
      </div>
    </div>
  );
};

export default Loading;
