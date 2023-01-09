import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Button,
  FormHelperText,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import React, { useCallback, useEffect, useState } from "react";
import { API, PIN_CODE_API } from "../services/api/Api";

function Signup() {
  const [formValid, setFormValid] = useState(null);
  const [viewpwd, setViewPwd] = useState(false);
  const [reviewpwd, setReViewPwd] = useState(false);
  const [postOffices, setPostOffices] = useState([]);
  const [open, setOpen] = useState(false);
  const loading = open && postOffices.length === 0;

  const [signup, setSignup] = useState({
    firstName: { value: "", error: "", required: true },
    lastName: { value: "", error: "", required: true },
    phoneNo: { value: "", error: "", required: true },
    email: { value: "", error: "", required: true },
    password: { value: "", error: "", required: true },
    reTypePassword: { value: "", error: "", required: true },
    gender: { value: "", error: "", required: true },
    experience: { value: "", error: "" },
    addressLine1: { value: "", error: "", required: true },
    addressLine2: { value: "", error: "" },
    country: { value: "", error: "", required: true },
    pinCode: { value: "", error: "", required: true },
    state: { value: "", error: "", required: true },
    city: { value: "", error: "", required: true },
  });

  const pincodeUpdate = useCallback(
    (newInputValue, key) => {
      setSignup((prevState) => {
        return {
          ...prevState,
          [key]: {
            value: newInputValue?.Pincode,
            error: "",
            required: prevState[key].required,
          },
          country: {
            value: newInputValue?.Country,
            error: "",
            required: prevState["country"].required,
          },
          state: {
            value: newInputValue?.State,
            error: "",
            required: prevState["state"].required,
          },
          city: {
            value: newInputValue?.Region,
            error: "",
            required: prevState["city"].required,
          },
        };
      });
    },
    [signup]
  );

  const handleAddressAutoEntry = async (value, key) => {
    setSignup((prevState) => {
      return {
        ...prevState,
        [key]: { value, error: "", required: prevState[key].required },
      };
    });
    if (value && value.length === 6) {
      setOpen(true);
      const res = await PIN_CODE_API.get(value);
      const data = await res.data[0].PostOffice;
      const formattedData = data.map((x) => {
        return { ...x, Label: `${x.Pincode} - ${x.Name}` };
      });
      setPostOffices(formattedData);
    }
  };
  const handleInputField = useCallback(
    (value, key) => {
      setSignup((prevState) => {
        return {
          ...prevState,
          [key]: { required: prevState[key].required, value, error: "" },
        };
      });
    },
    [signup]
  );

  const handleError = useCallback(
    (value, key) => {
      if (key === "firstName") {
        const regex = /^[a-zA-Z ]{2,30}$/;
        if (!value.match(regex)) {
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error:
                  "Please provide a valid First Name and it should be at-least 2 characters long and within 30 characters",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
      if (key === "lastName") {
        const regex = /^[a-zA-Z ]{2,30}$/;
        if (!value.match(regex)) {
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error:
                  "Please provide a valid Last Name and it should be at-least 2 characters long and within 30 characters",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
      if (key === "phoneNo") {
        const regex = /^([+]\d{2})?\d{10}$/;
        if (!value.match(regex)) {
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error: "Please provide a valid Phone No.",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
      if (key === "email") {
        const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        if (!value.match(regex)) {
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error: "Please provide a valid Email.",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
      if (key === "password") {
        const regex =
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,16}$/;
        if (!value.match(regex)) {
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error:
                  "Please provide a valid Password. Password Must be Minimum eight and maximum 16 characters, at least one uppercase letter, one lowercase letter, one number and one special character ",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
      if (key === "reTypePassword") {
        if (value != signup.password.value || !signup.password.value) {
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error: "Password and Retype password must match ",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
      if (key === "gender") {
        if (value.length === 0) {
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error: "Please select a gender",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
      if (key === "experience") {
        const regex = /^([1-9]|[1-9][0-9]){1,2}$/;
        if (value && !value.match(regex)) {
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error: "Please provide your experience in years",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
      if (key === "addressLine1") {
        const regex = /^[#.0-9a-zA-Z\s,-]+$/;
        if (!value.match(regex)) {
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error: "Please provide your Address Line 1",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
      if (key === "addressLine2") {
        const regex = /^[#.0-9a-zA-Z\s,-]+$/;
        if (value && !value.match(regex)) {
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error: "Please provide valid Address Line 2",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
      if (key === "pinCode") {
        console.log("pincode", value);
        if (!value || (value && value.length < 6)) {
          console.log("pincode", value);
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error: "Please provide valid Pincode",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
      if (key === "city") {
        if (!value) {
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error: "Please provide valid City",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
      if (key === "state") {
        if (!value) {
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error: "Please provide valid State",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
      if (key === "country") {
        if (!value) {
          setSignup((prevState) => {
            return {
              ...prevState,
              [key]: {
                required: prevState[key].required,
                value,
                error: "Please provide valid Country",
              },
            };
          });

          return false;
        } else {
          return true;
        }
      }
    },
    [signup]
  );

  const validateAndSubmit = (e) => {
    e.preventDefault();
    const allFields = Object.keys(signup);
    allFields.forEach((x) => {
      if (
        (signup[x].required && signup[x].value.length === 0) ||
        (signup[x].required && signup[x].error)
      ) {
        handleError(signup[x].value, x);
        return false;
      }
    });
    extractValue(signup);
    API.post("consultants/register", signup).then((res) => {
      console.log(res);
    });
  };

  const extractValue = (obj) => {
    const allFields = Object.keys(obj);
    let data = {};
    allFields.forEach((x) => {
      data[x] = obj[x].value;
    });
    console.log(data);
  };

  useEffect(() => {
    // console.log("signup", signup);
  }, [signup]);

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
                        value={signup.firstName.value}
                        helperText={signup.firstName.error}
                        onChange={(e) => {
                          handleInputField(e.target.value, "firstName");
                          handleError(e.target.value, "firstName");
                        }}
                        error={signup.firstName.error ? true : false}
                      />
                    </div>
                  </div>
                  <div className="col-md-6 mb-4">
                    <div className="form-outline">
                      <TextField
                        label="Last Name"
                        fullWidth
                        variant="outlined"
                        value={signup.lastName.value}
                        helperText={signup.lastName.error}
                        onChange={(e) => {
                          handleInputField(e.target.value, "lastName");
                          handleError(e.target.value, "lastName");
                        }}
                        error={signup.lastName.error ? true : false}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <TextField
                      label="Phone No."
                      fullWidth
                      variant="outlined"
                      value={signup.phoneNo.value}
                      helperText={signup.phoneNo.error}
                      onChange={(e) => {
                        handleInputField(e.target.value, "phoneNo");
                        handleError(e.target.value, "phoneNo");
                      }}
                      error={signup.phoneNo.error ? true : false}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <TextField
                      label="Email"
                      fullWidth
                      variant="outlined"
                      value={signup.email.value}
                      helperText={signup.email.error}
                      onChange={(e) => {
                        handleInputField(e.target.value, "email");
                        handleError(e.target.value, "email");
                      }}
                      error={signup.email.error ? true : false}
                    />
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
                        type={viewpwd ? "text" : "password"}
                        value={signup.password.value}
                        helperText={signup.password.error}
                        onChange={(e) => {
                          handleInputField(e.target.value, "password");
                          handleError(e.target.value, "password");
                        }}
                        error={signup.password.error ? true : false}
                      />
                      <VisibilityIcon
                        onClick={(e) => setViewPwd(!viewpwd)}
                        sx={{
                          color: "action.active",
                          position: "absolute",
                          right: "10px",
                          top: "14px",
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
                        label="Re Type Password"
                        variant="outlined"
                        fullWidth
                        type={reviewpwd ? "text" : "password"}
                        value={signup.reTypePassword.value}
                        helperText={signup.reTypePassword.error}
                        onChange={(e) => {
                          handleInputField(e.target.value, "reTypePassword");
                          handleError(e.target.value, "reTypePassword");
                        }}
                        error={signup.reTypePassword.error ? true : false}
                      />
                      <VisibilityIcon
                        onClick={(e) => setViewPwd(!viewpwd)}
                        sx={{
                          color: "action.active",
                          position: "absolute",
                          right: "10px",
                          top: "14px",
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
                        value={signup.gender.value}
                        onChange={(e) => {
                          handleInputField(e.target.value, "gender");
                          handleError(e.target.value, "gender");
                        }}
                        error={signup.gender.error ? true : false}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="male">Male</MenuItem>
                        <MenuItem value="female">Female</MenuItem>
                        <MenuItem value="transgender">Transgender</MenuItem>
                      </Select>
                      <FormHelperText error={!!signup.gender.error}>
                        {signup.gender.error}
                      </FormHelperText>
                    </FormControl>
                  </div>
                  <div className="col-md-6 mb-4">
                    <TextField
                      label="Experience"
                      fullWidth
                      type="number"
                      variant="outlined"
                      value={signup.experience.value}
                      helperText={signup.experience.error}
                      onChange={(e) => {
                        handleInputField(e.target.value, "experience");
                        handleError(e.target.value, "experience");
                      }}
                      error={signup.experience.error ? true : false}
                    />
                  </div>
                </div>

                <div className="form-outline mb-4">
                  <TextField
                    label="Address Line 1"
                    fullWidth
                    variant="outlined"
                    value={signup.addressLine1.value}
                    helperText={signup.addressLine1.error}
                    onChange={(e) => {
                      handleInputField(e.target.value, "addressLine1");
                      handleError(e.target.value, "addressLine1");
                    }}
                    error={signup.addressLine1.error ? true : false}
                  />
                </div>
                <div className="form-outline mb-4">
                  <TextField
                    label="Address Line 2"
                    fullWidth
                    variant="outlined"
                    value={signup.addressLine2.value}
                    helperText={signup.addressLine2.error}
                    onChange={(e) => {
                      handleInputField(e.target.value, "addressLine2");
                      handleError(e.target.value, "addressLine2");
                    }}
                    error={signup.addressLine2.error ? true : false}
                  />
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <Autocomplete
                      label="Pin Code"
                      fullWidth
                      variant="outlined"
                      autoComplete
                      includeInputInList
                      filterSelectedOptions
                      noOptionsText="No Place"
                      onChange={(event, newValue) => {
                        pincodeUpdate(newValue, "pinCode");
                      }}
                      onInputChange={(e, newInputValue) => {
                        handleAddressAutoEntry(newInputValue, "pinCode");
                      }}
                      options={postOffices}
                      getOptionLabel={(option) => option.Label || ""}
                      open={open}
                      onOpen={() => {
                        setOpen(true);
                      }}
                      onClose={() => {
                        setOpen(false);
                      }}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          label="Pin Code"
                          helperText={signup.pinCode.error}
                          error={signup.pinCode.error ? true : false}
                          InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                              <React.Fragment>
                                {loading ? (
                                  <CircularProgress color="inherit" size={20} />
                                ) : null}
                                {params.InputProps.endAdornment}
                              </React.Fragment>
                            ),
                          }}
                        />
                      )}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <TextField
                      label="Country"
                      fullWidth
                      variant="outlined"
                      value={signup.country.value}
                      helperText={signup.country.error}
                      onChange={(e) => {
                        handleInputField(e.target.value, "country");
                        handleError(e.target.value, "country");
                      }}
                      error={signup.country.error ? true : false}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-4">
                    <TextField
                      label="State"
                      fullWidth
                      variant="outlined"
                      value={signup.state.value}
                      helperText={signup.state.error}
                      onChange={(e) => {
                        handleInputField(e.target.value, "state");
                        handleError(e.target.value, "state");
                      }}
                      error={signup.state.error ? true : false}
                    />
                  </div>
                  <div className="col-md-6 mb-4">
                    <FormControl sx={{ minWidth: "100%" }}>
                      <TextField
                        label="City"
                        fullWidth
                        variant="outlined"
                        value={signup.city.value}
                        helperText={signup.city.error}
                        onChange={(e) => {
                          handleInputField(e.target.value, "city");
                          handleError(e.target.value, "city");
                        }}
                        error={signup.city.error ? true : false}
                      />
                    </FormControl>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-12 mb-4 justify-content-end align-items-end">
                    <div className="d-flex">
                      <Button
                        variant="contained"
                        fullWidth
                        color="primary"
                        onClick={(e) => validateAndSubmit(e)}
                      >
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
