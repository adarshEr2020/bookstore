import React from "react";
import "./Home.css";
import BookCard from "../bookcard/BookCard";
import Header from "../headerFooter/Header";
import Footer from "../headerFooter/Footer";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
export default function Home() {
  
  return (
    <>
      <Header />
      <div className="container">
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
        <BookCard/>
      </div>
      <Footer />
    </>
  );
}
