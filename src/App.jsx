import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import EventEntryForm from "./Screen/EventEntryForm";
import EventList from "./Ui/Components/EventList";
import PageNotFound from "./Screen/PageNotFound";

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
        className="absolute z-10 bottom-7 right-7 rounded-full bg-dark1 p-2"
        onClick={toggleDarkMode}
      >
        {darkMode && (
          <MdLightMode className="text-light1 text-4xl sm:text-5xl smooth-transition" />
        )}
        {!darkMode && (
          <MdDarkMode className="text-light1 text-4xl sm:text-5xl smooth-transition" />
        )}
      </button>
      <Routes>
        <Route path="/" element={<EventList title="Events in Hydrabad" />} />
        <Route path="/eventsubmitionform" element={<EventEntryForm />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </section>
  );
};

export default App;
