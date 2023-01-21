import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import EventEntryForm from "./Screen/EventEntryForm";
import EventList from "./Ui/Components/EventList";
import PageNotFound from "./Screen/PageNotFound";
import EventDetailPage from "./Screen/EventDetailPage";
import Profile from "./Screen/Profile";
import { useStore } from "./Store/zustand";
import Home from "./Screen/Home";
import Loading from "./Ui/Components/Loading";

import { MdLightMode, MdDarkMode } from "react-icons/md";

const App = () => {
  const { darkMode, setDarkMode } = useStore((state) => state);

  const toggleDarkMode = () => {
    setDarkMode(darkMode);
  };

  useEffect(() => {
    document.body.classList.toggle("darkmode", darkMode);
  }, [darkMode]);

  window.addEventListener("storage", (e) => {
    if (e.key === "darkMode") {
      useStore((state) => {
        state.darkMode = e.newValue;
      });
    }
  });

  return (
    <section className={`App ${darkMode === "true" ? "darkmode" : ""}`}>
      <button
        className="smooth-transition fixed bottom-2 right-2 z-10 rounded-full bg-light2 p-2 sm:bottom-7 sm:right-7"
        onClick={(e) => toggleDarkMode()}
      >
        {darkMode && (
          <MdLightMode className="smooth-transition fill-dark1 text-4xl sm:text-5xl" />
        )}
        {!darkMode && (
          <MdDarkMode className="smooth-transition fill-dark1 text-4xl sm:text-5xl" />
        )}
      </button>
      <Routes>
        <Route path="/" element={<Home title="Events in Hydrabad" />} />
        <Route
          path="/EventList"
          element={<EventList title="Events in Hydrabad" />}
        />
        <Route path="/eventsubmitionform" element={<EventEntryForm />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/EventDetail/:eventTitle" element={<EventDetailPage />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
        {/* same place where you opened the server */}
      </Routes>
    </section>
  );
};

export default App;
