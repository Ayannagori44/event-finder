import React from "react";
import { Routes, Route } from "react-router-dom";
import EventEntryForm from "./Screen/EventEntryForm";

const App = () => {
  return (
    <Routes>
      <Route path="evententryform" element={<EventEntryForm />} />
    </Routes>
  );
};

export default App;
