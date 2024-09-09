import React from "react";
import Root from "../Root/Root";
import Books from "../Books/Books";
import Banner from "../Banner/Banner";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Books />
    </div>
  );
};

export default Home;
