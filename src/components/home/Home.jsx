import React from "react";
import "./Home.css";
import Books from "../books/Books";
import Header from "../headerFooter/Header";
export default function Home() {
  return (
    <div className="container">
      <Header />
      <Books />
    </div>
  );
}

