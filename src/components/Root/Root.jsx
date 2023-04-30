import React from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Header/Header";
import LastWeeksGames from "../lastWeeksGames/LastWeeksGames";
import UpComingGames from "../upComingGames/UpComingGames";
import News from "../News/News";
import LatestNews from "../LatestNews/LatestNews";
import Footer from "../Footer/Footer";
import DisplayNews from "../../pages/displayNews";
import DataContextProvider from "../../DataContext/Contect";

const Root = () => {
  return (
    <>
      <Header />
      <LastWeeksGames />
      <UpComingGames />
      <News />
      <LatestNews />
      <Footer />
    </>
  );
};

const App = () => {
  return (
    <DataContextProvider>
      <Routes>
        <Route path="/news/:id" element={<DisplayNews />} />
        <Route path="/" element={<Root />} />
      </Routes>
    </DataContextProvider>
  );
};

export default App;
