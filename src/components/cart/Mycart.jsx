import React from "react";
import Footer from "../headerFooter/Footer";
import Header from "../headerFooter/Header";
import { Button } from "@mui/material";
import "./Mycart.css";

export default function Mycart() {
  return (
    <div>
      <Header />
      <h3 style={{ marginLeft: "8%" }}>
        <span style={{ color: "gray" }}> Home/ </span> My cart
      </h3>
      <div className="myCartContainer">
        <div className="textAndLocationContain">
          <h3>My cart(1)</h3>
          <select className="selectLocationFeild">
            <option value="location">Use current location</option>
          </select>
        </div>
        <div className="bookImgAddDetails">
          <div className="bookImgDiv"></div>
          <div className="bookDetailsDiv text">
            <b>Don't Make Me Think</b>
            <p>by Steve Krug</p>
            <span style={{ width: "50px" }}>
              <b>Rs 1500</b>
            </span>
            <del style={{ color: "gray" }}> Rs 2000</del>
          </div>
        </div>
        <div className="placeOrderBtn">
          <Button
            variant="contained"
            color="primary"
            style={{ float: "right" }}
          >
            Place order
          </Button>
        </div>
      </div>
      <div className="addressOrderDetailContainer">
        <h4 className="txt">Address Details</h4>
      </div>
      <div className="addressOrderDetailContainer">
        <h4 className="txt">Order Summery</h4>
      </div>
      <Footer />
    </div>
  );
}
