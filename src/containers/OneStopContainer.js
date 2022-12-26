import React, { useEffect } from "react";
import { redirect, useNavigate } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import { Box } from "@mui/material";

function OneStopContainer() {
  const navigate = useNavigate();
  useEffect(() => {
    let timer = setTimeout(() => {
      navigate("profile/profileview");
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <Box
      sx={{
        display: "flex",
        flex: 1,
        justifyContent: "center",
      }}
    >
      <CircularProgress />
    </Box>
  );
}

export default OneStopContainer;
