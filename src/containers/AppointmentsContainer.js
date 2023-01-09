import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import { Calendar } from "react-calendar";
import "react-calendar/dist/Calendar.css";
import Slots from "../components/Slots";
import TimeSlots from "../data/timeSlots";
import { Chip, Divider } from "@mui/material";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  boxShadow: "none",
  justifyContent: "center",
  display: "flex",
  backgroundColor: "transparent",
  color: theme.palette.text.secondary,
}));

function AppointmentsContainer() {
  const [value, onChange] = useState(new Date());
  const [slots, setSlots] = useState(TimeSlots);
  useEffect(() => {
    console.log(value);
  }, [value]);
  useEffect(() => {
    console.log(slots);
  }, [slots]);

  return (
    <div className="container-fluid">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={12} lg={4} xl={3}>
            <Item>
              <Calendar onChange={onChange} value={value} />
            </Item>
          </Grid>
          <Grid item xs={12} md={12} lg={8} xl={9}>
            <Item>
              <Slots availableSlots={slots.day} label={"Day"} />
            </Item>
            <Item>
              <Slots availableSlots={slots.night} label={"Night"} />
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default AppointmentsContainer;
