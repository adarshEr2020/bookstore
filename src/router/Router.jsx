import React from "react";
import Main from "../components/main/Main";
import Home from "../components/home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Book from "../components/book/Book";
import Mycart from "../components/cart/Mycart";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/home/book" component={Book} />
          <Route exact path="/home/book/mycart" component={Mycart} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
