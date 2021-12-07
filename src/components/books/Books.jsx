import React, { useEffect } from "react";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react/cjs/react.development";
import { getBooks } from "../../services/services";

import Book1 from "../../assets/Book_1.png";
import Book2 from "../../assets/Book_2.png";
import Book3 from "../../assets/Book_3.png";
import Book4 from "../../assets/Book_4.png";
import Book5 from "../../assets/Book_5.png";
import Book6 from "../../assets/Book_6.png";
import Book7 from "../../assets/Book_7.png";
import Book8 from "../../assets/Book_8.png";
import Book9 from "../../assets/Book_9.png";

export default function Books() {
  const [books, setBooks] = useState([]);
  const getAllBooks = () => {
    getBooks()
      .then((response) => {
        console.log(response.data.result);
        setBooks(response.data.result);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    getAllBooks();
  }, []);
  return (
    <div>
      <div className="bookHeaderContainer">
        <div className="bookHeadTitle">
          <h3>
            Books<span style={{ color: "gray" }}>(128 itams)</span>
          </h3>
        </div>
        <div className="rightSortByRele">
          <Select className="sortmenu" value="1">
            <MenuItem value="1">Sort by relevance</MenuItem>
            <MenuItem value="2">Sort by rating</MenuItem>
          </Select>
        </div>
      </div>

      <div className="bookContainerMain">
        {books.map((book, index) => (
          <div className="booksContainer" key={index}>
            {booksImg.map((book11, index1) => (
              <div className="imgContainer" key={index1}>
                <img
                  // className="mainImageCircle"
                  src={book11}
                  alt="book.png"
                  width="150x"
                  height="150px"
                />
              </div>
            ))}

            {/* <img
              // className="mainImageCircle"
              src={Book3}
              alt="book.png"
              width="150x"
              height="150px"
            /> */}
            <div>
              <h3>{book.bookName}</h3>
            </div>
            <div style={{ color: "gray" }}>{book.author}</div>
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
              <span style={{ width: "50px" }}>Rs {book.price}</span>
              <del style={{ color: "gray" }}> Rs 2000</del>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const booksImg = [
  Book3,
  Book1,
  Book5,
  Book2,
  Book4,

  Book6,
  Book7,
  Book8,
  Book9,
];
