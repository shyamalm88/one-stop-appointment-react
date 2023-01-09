import { Button, Chip, Divider, Grid, Paper } from "@mui/material";
import React from "react";
import LightModeIcon from "@mui/icons-material/LightMode";
import BedtimeIcon from "@mui/icons-material/Bedtime";

function Slots({ availableSlots, label }) {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Divider style={{ margin: "20px" }}>
          <Chip
            label={label}
            variant="outlined"
            icon={label === "Day" ? <LightModeIcon /> : <BedtimeIcon />}
          />
        </Divider>
        <Grid container justifyContent="center" spacing={4}>
          {availableSlots.map((value, i) => (
            <Grid key={i} item>
              <Paper
                sx={{
                  width: 150,
                  backgroundColor: (theme) =>
                    theme.palette.mode === "dark" ? "#1A2027" : "#fff",
                }}
              >
                <Button
                  variant="outlined"
                  fullWidth
                  color="primary"
                  disabled={value.available === false}
                >
                  {value.timeSlot}
                </Button>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Slots;
