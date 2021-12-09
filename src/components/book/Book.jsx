import React, { useState } from "react";
import "./Book.css";
import Header from "../headerFooter/Header";
import { Button } from "@mui/material";
import Typography from "@mui/material/Typography";
import Rating from "@mui/material/Rating";
import { useHistory } from "react-router-dom";

export default function Book() {
  const [addtoBag, setAddToBag] = useState(false);
  let history = useHistory();
  console.log(history);

  const openAddtocart = () => {
    setAddToBag(true);
  };
  console.log(addtoBag);

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
              <div className="bookImg"></div>
            </div>

            <div className="btnAddto" style={{ display: "flex" }}>
              {!addtoBag ? (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={openAddtocart}
                >
                  ADD TO BAG
                </Button>
              ) : (
                <div id="addtocart" style={{ display: "flex" }}>
                  <div className="less"> - </div>
                  <div className="countbox">0</div>
                  <div className="more">＋</div>
                </div>
              )}

              <Button variant="contained" color="primary">
                WISHLIST
              </Button>
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
      {/* <Footer /> */}
    </div>
  );
}
