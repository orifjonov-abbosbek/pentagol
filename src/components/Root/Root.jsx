import React from "react";
import Header from "../Header/Header";
import LastWeeksGames from "../lastWeeksGames/LastWeeksGames";
import UpComingGames from "../upComingGames/UpComingGames";
import News from "../News/News";
import LatestNews from "../LatestNews/LatestNews";
import Footer from "../Footer/Footer";
import "./Root.scss";

const Root = () => {
  return (
    <>
      <Header />
      <LastWeeksGames />
      <UpComingGames />
      <News />
      <LatestNews />
      <Footer  />
    </>
  );
};

export default Root;
