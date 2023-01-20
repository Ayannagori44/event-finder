import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import EventEntryForm from "./Screen/EventEntryForm";
import EventList from "./Ui/Components/EventList";
import PageNotFound from "./Screen/PageNotFound";
import EventDetailPage from "./Screen/EventDetailPage";
import Profile from "./Screen/Profile";
import Home from "./Screen/Home";

import { MdLightMode, MdDarkMode } from "react-icons/md";

const App = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkmode") === "true"
  );

  const toggleDarkMode = () => {
    setDarkMode((prevDarkMode) => {
      localStorage.setItem("darkmode", !prevDarkMode);
      return !prevDarkMode;
    });
  };

  useEffect(() => {
    localStorage.setItem("darkmode", darkMode ? "true" : "false");
    document.body.classList.toggle("darkmode", darkMode);
  }, [darkMode]);

  return (
    <section className={`App ${darkMode ? "darkmode" : ""}`}>
      <button
        className="fixed bottom-2 right-2 z-10 rounded-full bg-dark1 p-2 sm:bottom-7 sm:right-7"
        onClick={toggleDarkMode}
      >
        {darkMode && (
          <MdLightMode className="smooth-transition text-4xl text-light1 sm:text-5xl" />
        )}
        {!darkMode && (
          <MdDarkMode className="smooth-transition text-4xl text-light1 sm:text-5xl" />
        )}
      </button>
      <Routes>
        <Route path="/" element={<EventList title="Events in Hydrabad" />} />
        <Route path="/home" element={<Home title="Events in Hydrabad" />} />
        <Route path="/eventsubmitionform" element={<EventEntryForm />} />
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
