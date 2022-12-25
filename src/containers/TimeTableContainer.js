import React from "react";
import { Timetable } from "../components/TimeTable";

function TimeTableContainer() {
  return (
    <div className="card mb-4">
      <div className="card-header">Schedules</div>
      <div className="card-body">
        <Timetable />
      </div>
    </div>
  );
}

export default TimeTableContainer;
