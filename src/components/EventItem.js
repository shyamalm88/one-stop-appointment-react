import { Popover, Typography } from "@mui/material";
import React, { useState } from "react";
import Moment from "react-moment";

const EventItem = ({ info }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const open = Boolean(anchorEl);
  const { event } = info;
  return (
    <>
      <div
        onClick={handleClick}
        style={{
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          overflow: "hidden",
          height: "100%",
        }}
      >
        <p>
          {event.title}{" "}
          <strong>
            ({<Moment format="hh:mm a">{event.startStr}</Moment>} {"🠖"}
            {<Moment format="hh:mm a">{event.endStr}</Moment>})
          </strong>
          Join This meeting by clicking on this link.
          <a
            href="http://google.com"
            target="_blank"
            class="joinLink"
            rel="noopener noreferrer"
          >
            Google
          </a>
        </p>
      </div>
      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
      >
        <Typography sx={{ p: 2 }}>
          <p>
            {event.title}{" "}
            <strong>
              ({<Moment format="hh:mm a">{event.startStr}</Moment>} {"🠖"}
              {<Moment format="hh:mm a">{event.endStr}</Moment>})
            </strong>
          </p>
        </Typography>
      </Popover>
    </>
  );
};

export default EventItem;
