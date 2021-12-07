import React from "react";
import Main from "../components/main/Main";
import Home from "../components/home/Home";
import { BrowserRouter, Route, Switch } from "react-router-dom";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
         <Route exact path="/" component={Main} />
         <Route exact path="/home" component={Home} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
