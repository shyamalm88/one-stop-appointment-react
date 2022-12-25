import { TextField, Button } from "@mui/material";
import React from "react";

function ForgotPassword() {
  return (
    <section>
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-12 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <form>
                    <div className="row">
                      <div className="col-md-12 mb-4">
                        <TextField label="Email" fullWidth variant="outlined" />
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12 mb-4 justify-content-end align-items-end">
                        <div className="d-flex">
                          <Button variant="contained" fullWidth color="primary">
                            Reset Password
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

export default ForgotPassword;
