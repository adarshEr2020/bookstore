import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import { Radio } from "@mui/material";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormLabel from "@mui/material/FormLabel";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import "./CustomerDetails.css";
import { getCartItems, updateCustomerDetails } from "../../services/services";

export default function CustomerDetails(props) {
  const [customer, setCustomerdata] = useState([]);
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [type, setType] = useState("");

  const takeState = (event) => setState(event.target.value);
  const takeAddress = (event) => setAddress(event.target.value);
  const takeCity = (event) => setCity(event.target.value);
  const takeValue = (event) => setType(event.target.value);

  let customerDetails = {
    addressType: type,
    fullAddress: address,
    city: city,
    state: state,
  };

  const loadCustomerdata = () => {
    getCartItems()
      .then((response) => {
        console.log(response, "customer data recieved");
        setCustomerdata(response.data.result[0].user_id);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    loadCustomerdata();
  }, []);
  const updateCustomerdetails = () => {
    updateCustomerDetails(customerDetails)
      .then((response) => {
        console.log("updated address ", response);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  return (
    <div className="validation-box">
      <div className="customer-details-title">
        <p>Customer details</p>
        <div className="addnewaddress">
          <p>Add new Address</p>
        </div>
      </div>

      <div className="inputfields-container">
        <div className="row-1-field">
          <TextField
            label=""
            id="outlined-size-small"
            defaultValue=""
            size="small"
            className="fullname-1r"
            value={customer.fullName}
            helperText="Full Name"
          />
          <TextField
            label=""
            id="outlined-size-small"
            defaultValue=""
            size="small"
            className="mobilenum-1r"
            value={customer.phone}
            helperText="Mobile Number"
          />
        </div>
        <div className="row-2-field">
          <TextareaAutosize
            aria-label="minimum height"
            minRows={3}
            placeholder="Address"
            className="Address-2r"
            onChange={takeAddress}
          />
        </div>
        <div className="row-3-field">
          <TextField
            label="City/Town"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            className="city-3r"
            onChange={takeCity}
          />
          <TextField
            label="State"
            id="outlined-size-small"
            defaultValue=""
            size="small"
            className="state-3r"
            onChange={takeState}
          />
        </div>
        <div className="row-4-field">
          <FormLabel component="legend">Type</FormLabel>
          <RadioGroup
            row
            aria-label="Type"
            name="row-radio-buttons-group"
            onClick={takeValue}
          >
            <FormControlLabel value="Home" control={<Radio />} label="Home" />
            <FormControlLabel value="Work" control={<Radio />} label="Work" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </div>
      </div>

      <div className="continue-button-container">
        <div className="continue-button" onClick={updateCustomerdetails}>
          <p onClick={() => props.continueOrder(true)}>CONTINUE</p>
        </div>
      </div>
    </div>
  );
}
