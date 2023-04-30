import React from "react";
import Header from "../Header/Header";
import LastWeeksGames from "../lastWeeksGames/LastWeeksGames";
import UpComingGames from "../upComingGames/UpComingGames";
import News from "../News/News";
import "./Root.scss";

const Root = () => {
  return (
    <>
      <Header />
      <LastWeeksGames />
      <UpComingGames />
      <News />
    </>
  );
};

export default Root;
