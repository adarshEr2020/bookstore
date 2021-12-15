import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../headerFooter/Footer";
import Header from "../headerFooter/Header";
import { getCartItems } from "../../services/services";
import { Button } from "@mui/material";
import "./Mycart.css";

export default function Mycart() {
  const [cartItems, setCartItems] = useState([]);
  const history = useHistory();
  useEffect(() => {
    getAllCartItems();
  }, []);
  const getAllCartItems = () => {
    getCartItems()
      .then((response) => {
        console.log("getCartItems", response);
        setCartItems(response.data.result);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  console.log(cartItems);

  const orderPlaced = () => {
    history.push("/home/book/mycart/orderplaced");
  };
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
        {cartItems.map((product, index) => (
          <div className="bookImgAddDetails" key={index}>
            <div className="bookImgDiv"></div>
            <div className="bookDetailsDiv text">
              <b>{product.product_id.bookName}</b>
              <p>{product.product_id.author}</p>
              <span style={{ width: "50px" }}>
                <b> {product.product_id.price}</b>
              </span>
              <del style={{ color: "gray" }}> Rs 2000</del>
              <div className="addRemoveCartItems">
                <span className="sub">-</span>
                <span className="value" id={product._id}>1</span>
                <span className="add">+</span>
                <span className="remove">Remove</span>
              </div>
            </div>
          </div>
        ))}

        <div className="placeOrderBtn">
          <Button
            variant="contained"
            color="primary"
            style={{ float: "right" }}
            onClick={orderPlaced}
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
