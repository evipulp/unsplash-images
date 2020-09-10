import React from "react";
import "./Styles/Home.css";

import SearchIcon from "@material-ui/icons/Search";

const Home = () => {
  return (
    <div
      className="home"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1516059123626-07d37ee58f94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80")`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",

        height: "100vh",
      }}
    >
      <div className="home_middle">
        <div className="home_middleContainer">
          <h1>Unsplash</h1>
          <p>The internet’s source of freely-usable images.</p>
          <p>Powered by creators everywhere.</p>
          <div className="home_searchBox">
            <SearchIcon />
            <input
              placeholder="Search free high-resolution photos"
              type="text"
            />
          </div>
          <p>Trending: flower, wallpapers, backgrounds, happy, love</p>
        </div>
      </div>

      <div className="home_bottom">
        <p className="bottom_left">Photo of the Day by David Grandmougin</p>
        <p className="bottom_right">Read more about the Unsplash License</p>
      </div>
    </div>
  );
};

export default Home;
