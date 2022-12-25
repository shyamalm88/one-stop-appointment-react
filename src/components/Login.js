import { Box, Button, Divider, TextField, Typography } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React from "react";

function Login() {
  return (
    <section>
      <div className="text-center text-lg-start">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-12 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <TextField
                          label="Phone No."
                          fullWidth
                          variant="outlined"
                        />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <Divider component="div" role="presentation">
                          {/* any elements nested inside the role="presentation" preserve their semantics. */}
                          <Typography variant="span">Or</Typography>
                        </Divider>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <TextField label="Email" fullWidth variant="outlined" />
                      </div>
                      <div className="col-md-12 mb-4">
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
                    </div>
                    <div className="row">
                      <div className="col-md-12 mb-4 justify-content-end align-items-end">
                        <div className="d-flex">
                          <Button variant="contained" fullWidth color="primary">
                            Login
                          </Button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
