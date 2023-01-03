import React from "react";
import { Routes, Route } from "react-router-dom";
import EventEntryForm from "./Screen/EventEntryForm";
import EventList from "./Ui/Components/EventList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<EventList title="Events in Hydrabad" />} />
      <Route path="/eventsubmitionform" element={<EventEntryForm />} />
    </Routes>
  );
};

export default App;
