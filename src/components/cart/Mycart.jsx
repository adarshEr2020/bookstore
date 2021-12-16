import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Footer from "../headerFooter/Footer";
import Header from "../headerFooter/Header";
import {
  getCartItems,
  cartQuantityItem,
  removeCartItems,
  takeOrder,
} from "../../services/services";
import { Button } from "@mui/material";
import "./Mycart.css";
import CustomerDetails from "../customerDetails/CustomerDetails";

export default function Mycart() {
  const [cartItems, setCartItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [openAddressFeilds, setOpenAddressFeilds] = useState(false);
  const [openOrdeSummeryFeilds, setOpenOrdeSummeryFeilds] = useState(false);
  const history = useHistory();

  useEffect(() => {
    getAllCartItems();
  }, [quantity]);

  const getAllCartItems = () => {
    getCartItems()
      .then((response) => {
        console.log("getCartItems", response.data.result);
        setCartItems(response.data.result);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const decrementCartItem = (cartId) => {
    console.log("decrimented items", cartId);
    let obj = { quantityToBuy: quantity - 1 };
    cartQuantityItem(cartId, obj)
      .then((response) => {
        console.log(response.data);
        setQuantity(quantity - 1);
      })
      .catch((err) => {
        console.warn(err);
      });
    setQuantity(quantity - 1);
  };

  const incrementCartItem = (cartId) => {
    console.log("incremented items", cartId);
    let obj = { quantityToBuy: quantity + 1 };
    cartQuantityItem(cartId, obj)
      .then((response) => {
        console.log(response.data);
        setQuantity(quantity + 1);
      })
      .catch((err) => {
        console.warn(err);
      });
  };
  console.log(cartItems);

  const deleteCartItems = (cartId) => {
    removeCartItems(cartId)
      .then((response) => {
        console.log(response.data.message);
        getAllCartItems();
      })
      .catch((err) => {
        console.warn(err);
      });
    console.log(cartId);
  };
  const orderPlaced = () => {
    setOpenAddressFeilds(!openAddressFeilds);
  };

  const continueOrder = () => {
    setOpenOrdeSummeryFeilds(!openOrdeSummeryFeilds);
  };

  const checkoutOrder = () => {
    let arr_ordered_books = [];

    cartItems.map((element) => {
      let ordered_book = {
        product_id: element._id,
        product_name: element.product_id.bookName,
        product_quantity: element.quantityToBuy,
        product_price: element.product_id.price,
      };
      return arr_ordered_books.push(ordered_book);
    });

    let orderObj = {
      orders: arr_ordered_books,
    };
    takeOrder(orderObj)
      .then((response) => {
        console.log(response.data.message, "order items", response.data.result);
        history.push("/home/book/mycart/orderplaced");
      })
      .catch((err) => {
        console.warn(err);
      });
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
                <span
                  className="sub"
                  onClick={() => decrementCartItem(cartItems[index]._id)}
                >
                  -
                </span>
                <span className="value" id={product._id}>
                  {quantity}
                </span>
                <span
                  className="add"
                  onClick={() => incrementCartItem(cartItems[index]._id)}
                >
                  +
                </span>
                <span
                  className="remove"
                  onClick={() => deleteCartItems(cartItems[index]._id)}
                >
                  Remove
                </span>
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
        {openAddressFeilds ? (
          <div className="txt">Address Details</div>
        ) : (
          <CustomerDetails continueOrder={continueOrder} />
        )}
      </div>

      <div className="addressOrderDetailContainer">
        {openOrdeSummeryFeilds ? (
          <h4 className="txt">Order Summery</h4>
        ) : (
          <div className="orderSummeryContainer">
            <p className="txt-order">Order Summery</p>
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
                </div>
              </div>
            ))}
            <div className="checkout-btn">
              <Button
                variant="contained"
                color="primary"
                onClick={checkoutOrder}
              >
                Checkout
              </Button>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
