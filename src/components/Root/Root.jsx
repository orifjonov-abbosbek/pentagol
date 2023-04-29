import React from "react";
import Header from "../Header/Header";
import LastWeeksGames from "../lastWeeksGames/LastWeeksGames";
import UpComingGames from "../upComingGames/UpComingGames";
import "./Root.scss";

const Root = () => {
  return (
    <>
      <Header />
      <LastWeeksGames />
      <UpComingGames />
    </>
  );
};

export default Root;
