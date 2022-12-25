import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import Moment from "react-moment";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./TimeTable.css";

export const Timetable = () => {
  const [events, setEvents] = useState([
    {
      title: "Meeting",
      start: "2022-12-25T01:30:00+05:30",
      end: "2022-12-25T02:00:00+05:30",
      backgroundColor: "orange",
      borderColor: "orange",
    },
    {
      title: "Birthday Party",
      start: "2022-12-25T05:00:00+05:30",
      end: "2022-12-25T05:30:00+05:30",
      backgroundColor: "green",
      borderColor: "green",
    },
  ]);
  const handleSelect = (info) => {
    const { start, end } = info;
    const eventNamePrompt = prompt("Enter, event name");
    if (eventNamePrompt) {
      setEvents([
        ...events,
        {
          start,
          end,
          title: eventNamePrompt,
          id: uuid(),
        },
      ]);
    }
  };

  return (
    <div>
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, listPlugin, interactionPlugin]}
        initialView="timeGridDay"
        headerToolbar={{
          start: "today prev next",
          end: "timeGridWeek timeGridDay dayGridMonth listWeek",
        }}
        select={handleSelect}
        eventContent={(info) => <EventItem info={info} />}
        views={["timeGridWeek", "timeGridDay", "listWeek"]}
        weekends={true}
        events={events}
        selectable={true}
        editable={true}
        selectOverlap={false}
      />
    </div>
  );
};

const EventItem = ({ info }) => {
  const { event } = info;
  console.log(event);
  return (
    <div>
      <p>
        {event.title}{" "}
        <strong>
          ({<Moment format="HH:mm">{event.startStr}</Moment>} {"🠖"}
          {<Moment format="HH:mm">{event.endStr}</Moment>})
        </strong>
      </p>
    </div>
  );
};
