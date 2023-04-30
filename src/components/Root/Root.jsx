import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
    <DataContextProvider>
        <Header />
        <LastWeeksGames />
        <UpComingGames />
        <News />
        <LatestNews />
        <Footer />

        <Routes>
          <Route path="/news" element={<DisplayNews />} />
        </Routes>
  
    </DataContextProvider>
  );
};

export default Root;
