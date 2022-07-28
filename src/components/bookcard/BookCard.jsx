import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { getBooks } from "../../services/services";
import { bookURL } from "../../data/BookURL.js";

export default function BookCard() {
  const [books, setBooks] = useState([]);
  const history = useHistory();

  const getAllBooks = () => {
    getBooks()
      .then((response) => {
        // console.log("getbook", response.data.result);
        const addBookURL = response.data.result.map((item, index) => {
          return { ...item, image: bookURL[index] };
        });
        setBooks(addBookURL);
      })
      .catch((err) => {
        console.warn(err);
      });
  };

  useEffect(() => {
    getAllBooks();
  }, []);

  const addBookToCart = (bookName, author, price, _id,image) => {
    history.push({
      pathname: "/home/book",
      state: {
        bookname: bookName,
        author: author,
        price: price,
        productId: _id,
        image:image
      },
    });
  };

  return (
    <div>
      <div className="bookCardContainer">
        {books.map((book, index) => (
          <div
            className="booksContainer"
            key={index}
            onClick={() =>
              addBookToCart(book.bookName, book.author, book.price, book._id,book.image)
            }
          >
            <div className="imgContainer">
              <img src={book.image} alt="bookImage.png" className="imgInsideCard" />
            </div>
            <div className="bookCardTextContent">
              <div className="bookNameText">
                <h4>{book.bookName}</h4>
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
                <span style={{ width: "50px" }}>
                  <b>Rs {book.price}</b>
                </span>
                <del style={{ color: "gray" }}> Rs 2000</del>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
