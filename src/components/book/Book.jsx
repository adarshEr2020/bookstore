import React, { useEffect, useState } from "react";
import "./Book.css";
import {
  addToCart,
  cartQuantityItem,
  getCartItems,
} from "../../services/services";
import Header from "../headerFooter/Header";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useHistory } from "react-router-dom";

export default function Book() {
  const [addtoBag, setAddToBag] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const [cartitemsid, setCartitemsid] = useState("");
  let history = useHistory();

  const openAddtocart = (productId) => {
    addToCart(productId)
      .then((response) => {
        console.log("addtocart response", response);
      })
      .catch((err) => {
        console.warn(err);
      });
    setAddToBag(true);
  };
  // console.log(addtoBag)

  useEffect(() => {
    getAllCartItems();
  }, [quantity]);

  const getAllCartItems = () => {
    getCartItems()
      .then((response) => {
        // console.log("getCartItems", response.data.result);
        setCartitemsid(response.data.result[0]._id);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  const decrementCartItem = (cartId) => {
    // console.log("decrimented items");
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
    // console.log("incremented items");
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
  return (
    <div>
      <Header />
      <h3 style={{ marginLeft: "8%" }}>
        <span style={{ color: "gray" }}> Home/ </span> (Book 01)
      </h3>
      <div className="topBookContainer">
        <div className="leftBookIcon">
          <div className="img1"></div>
          <div className="img2"></div>
        </div>
        <div className="mainBookcardContainer">
          <div className="bookContainerWithbtn">
            <div className="bookCardImg">
              <img src={history.location.state.image} alt="bookImg.png" className="bookImg"/>
            </div>

            <div className="btnAddto">
              {!addtoBag ? (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={() =>
                    openAddtocart(history.location.state.productId)
                  }
                >
                  ADD TO BAG
                </Button>
              ) : (
                <div
                  id="addtocart"
                  className="addToCart"
                  style={{ display: "flex" }}
                >
                  <div
                    id="addtocart"
                    className="less"
                    onClick={() => decrementCartItem(cartitemsid)}
                  >
                    -
                  </div>
                  <div id="addtocart" className="countbox">
                    {quantity}
                  </div>
                  <div
                    id="addtocart"
                    className="more"
                    onClick={() => incrementCartItem(cartitemsid)}
                  >
                    ＋
                  </div>
                </div>
              )}
              <div>
                <Button variant="contained" color="primary">
                  WISHLIST
                </Button>
              </div>
            </div>
          </div>
          <div className="bookDetailsContainer">
            <div className="bookNameText">
              <h2>{history.location.state.bookname}</h2>
            </div>
            <div style={{ color: "gray" }}>{history.location.state.author}</div>
            <div>
              <span
                style={{
                  backgroundColor: "green",
                  width: "60px",
                  color: "white",
                }}
              >
                4.5*
              </span>
              <span style={{ color: "gray" }}>(20)</span>
            </div>
            <div>
              <span style={{ width: "50px" }}>
                <b>Rs {history.location.state.price}</b>
              </span>
              <del style={{ color: "gray" }}> Rs 2000</del>
            </div>

            <div className="bookDetails" style={{ color: "gray" }}>
              <hr />
              <h4>Book Detail</h4>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
              mollitia ipsam delectus perferendis provident. Error repudiandae
              omnis delectus inventore, cupiditate ullam nulla illum harum
              quibusdam ut recusandae eos voluptatem maxime.
              <hr />
            </div>

            <div className="customerFeedback">
              <h3>Customer Feedback</h3>
              <div className="ratingContainer">
                <div className="rating">
                  <Typography component="legend">Overall Rating</Typography>
                  <Rating name="no-value" value={null} />
                  <input type="text" className="inputFeedback" />
                </div>
                <Button
                  variant="contained"
                  color="primary"
                  style={{ float: "right", marginRight: "5%" }}
                >
                  Submit
                </Button>
              </div>
              <div className="customerRatingContain">
                <div className="customerRating">
                  <Typography component="legend">@David kr</Typography>
                  <Rating name="size-small" defaultValue={2} size="small" />
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                  <Typography component="legend">@Mavel R</Typography>
                  <Rating name="size-small" defaultValue={2} size="small" />
                  <p>fuga pariatur doloribus, nulla impedit? Et, illum.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
