import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";

function Signup() {
  return (
    <section>
      <div className="container">
        {/* <div className="row gx-lg-5 align-items-center"> */}
        <div className="col-lg-12 mb-5 mb-lg-0">
          <div className="card">
            <div className="card-body py-5 px-md-5">
              <form>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <TextField
                        label="First Name"
                        fullWidth
                        variant="outlined"
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <TextField
                        label="Last Name"
                        fullWidth
                        variant="outlined"
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <TextField label="Phone No." fullWidth variant="outlined" />
                  </div>
                  <div className="col-md-6 mb-4">
                    <TextField label="Email" fullWidth variant="outlined" />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <TextField
                        label="Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                      />
                      <VisibilityIcon
                        sx={{
                          color: "action.active",
                          position: "absolute",
                          right: "10px",
                          cursor: "pointer",
                        }}
                      />
                    </Box>
                  </div>
                  <div className="col-md-6 mb-4">
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        position: "relative",
                      }}
                    >
                      <TextField
                        label="Retype Password"
                        variant="outlined"
                        fullWidth
                        type="password"
                      />
                      <VisibilityIcon
                        sx={{
                          color: "action.active",
                          position: "absolute",
                          right: "10px",
                          cursor: "pointer",
                        }}
                      />
                    </Box>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-4">
                    <FormControl sx={{ minWidth: "100%" }}>
                      <InputLabel>Gender</InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        label="Gender"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-md-6 mb-4">
                    <TextField
                      label="Experience"
                      fullWidth
                      variant="outlined"
                    />
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <TextField
                    label="Address Line 1"
                    fullWidth
                    variant="outlined"
                  />
                </div>
                <div className="form-outline mb-4">
                  <TextField
                    label="Address Line 2"
                    fullWidth
                    variant="outlined"
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <FormControl sx={{ minWidth: "100%" }}>
                      <InputLabel>Country</InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        label="Gender"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-md-6 mb-4">
                    <TextField label="Pin Code" fullWidth variant="outlined" />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <FormControl sx={{ minWidth: "100%" }}>
                      <InputLabel>State</InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        label="State"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                  <div className="col-md-6 mb-4">
                    <FormControl sx={{ minWidth: "100%" }}>
                      <InputLabel>City</InputLabel>
                      <Select
                        labelId="demo-simple-select-autowidth-label"
                        label="City"
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                      </Select>
                    </FormControl>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-4 justify-content-end align-items-end">
                    <div className="d-flex">
                      <Button variant="contained" fullWidth color="primary">
                        Signup
                      </Button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}

export default Signup;
