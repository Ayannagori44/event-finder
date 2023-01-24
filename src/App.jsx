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
import Navbar from "./Ui/Components/Navbar";

import DarkModeToggleButton from "./Ui/Components/DarkModeToggleButton";

const App = () => {
  const { darkMode } = useStore((state) => state);

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
      <DarkModeToggleButton />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home title="Events in Hydrabad" />} />
        <Route
          path="/explore"
          element={<EventList title="Events in Hydrabad" />}
        />
        <Route path="/eventsubmitionform" element={<EventEntryForm />} />
        <Route path="/about" element={<Loading />} />
        <Route path="/eventdetail:eventtitle" element={<EventDetailPage />} />
        <Route path="/profile" element={<Loading />} />
        {/* <Route path="/profile" element={<Profile />} /> */}
        <Route path="/404" element={<PageNotFound />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Routes>
    </section>
  );
};

export default App;
