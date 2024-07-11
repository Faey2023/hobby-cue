import React from "react";
import GetStarted from "./components/home/GetStarted";
import Listing from "./components/home/Listing";

const Home = () => {
  return (
    <div>
      <Listing />
      <GetStarted />
    </div>
  );
};

export default Home;
