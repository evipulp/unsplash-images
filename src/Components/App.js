import React from "react";
import Home from "./Home";
import Header from "./Header";
import NavBar from "./NavBar";
import Trending from "./Trending";
import New from "./New";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Home />
        <NavBar />
        <Route path="/trending" component={Trending} />
        <Route path="/new" exact component={New} />
      </BrowserRouter>
    </div>
  );
};

export default App;
