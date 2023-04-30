import React from "react";
import Header from "../Header/Header";
import LastWeeksGames from "../lastWeeksGames/LastWeeksGames";
import UpComingGames from "../upComingGames/UpComingGames";
import News from "../News/News";
import LatestNews from "../LatestNews/LatestNews";
import "./Root.scss";

const Root = () => {
  return (
    <>
      <Header />
      <LastWeeksGames />
      <UpComingGames />
      <News />
      <LatestNews />
    </>
  );
};

export default Root;
