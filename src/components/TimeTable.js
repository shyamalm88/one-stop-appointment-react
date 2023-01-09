import * as React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import Moment from "react-moment";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import "./TimeTable.css";
import { formatTimeForEvent } from "../services/util/util";
import {
  Typography,
  Popover,
  Modal,
  Box,
  TextField,
  Button,
} from "@mui/material";
import EventItem from "./EventItem";
import { MobileDatePicker, TimePicker } from "@mui/x-date-pickers";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid background.paper",
  boxShadow: 24,
  p: 4,
};

export const Timetable = () => {
  const [open, setOpen] = useState(false);
  const [eventName, setEventName] = useState("");
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [date, setDate] = useState(null);
  const handleOpen = (start, end) => {
    setEventName("");
    setStartTime(null);
    setEndTime(null);
    setDate(null);
    if (start) {
      setStartTime(start);
    }
    if (end) {
      setEndTime(end);
    }

    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [events, setEvents] = useState([
    {
      title: "Meeting Meeting Meeting Meeting Meeting",
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
    {
      title: "Meeting Meeting Meeting Meeting Meeting",
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
    {
      title: "Meeting Meeting Meeting Meeting Meeting",
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
    {
      title: "Meeting Meeting Meeting Meeting Meeting",
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
    {
      title: "Meeting Meeting Meeting Meeting Meeting",
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

  const handleEventNameChange = (event) => {
    setEventName(event.target.value);
  };

  const handleChange = (newValue) => {
    setStartTime(newValue);
  };

  const handleChangeEndTime = (newValue) => {
    setEndTime(newValue);
  };

  const handleDateChange = (newValue) => {
    console.log(newValue);
    setDate(newValue);
  };

  const handleEventSave = () => {
    // console.log(date.format());
    const [startDateTime, endDateTime, error] = formatTimeForEvent(
      date,
      startTime,
      endTime
    );

    // console.log(dateYear+)
    setEvents([
      ...events,
      {
        start: startDateTime,
        end: endDateTime,
        title: eventName,
        backgroundColor: "orange",
        backgroundColor: "orange",
        id: uuid(),
      },
    ]);
    console.log(events);
    setOpen(false);
  };

  const handleSelect = (info) => {
    const { start, end } = info;
    handleOpen(start, end);
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
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="subtitle1" component="h2" mt={2} mb={2}>
            Please Select a Date and Time
          </Typography>
          <TextField
            id="outlined-basic"
            label="Event Name"
            fullWidth
            variant="outlined"
            value={eventName}
            onChange={handleEventNameChange}
          />
          <MobileDatePicker
            label="Event Date"
            inputFormat="MM/DD/YYYY"
            value={date}
            onChange={handleDateChange}
            renderInput={(params) => (
              <TextField {...params} fullWidth sx={{ marginTop: "20px" }} />
            )}
          />
          <TimePicker
            label="Schedule Start Time"
            minutesStep={30}
            value={startTime}
            onChange={handleChange}
            renderInput={(params) => (
              <TextField {...params} fullWidth sx={{ marginTop: "20px" }} />
            )}
          />
          <TimePicker
            label="Schedule End Time"
            minutesStep={30}
            value={endTime}
            onChange={handleChangeEndTime}
            renderInput={(params) => (
              <TextField {...params} fullWidth sx={{ marginTop: "20px" }} />
            )}
          />
          <Button
            sx={{ marginTop: "20px" }}
            variant="contained"
            onClick={handleEventSave}
          >
            Save
          </Button>
        </Box>
      </Modal>
    </div>
  );
};
