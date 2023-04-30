import React from "react";
import "./displayNews.scss";
import Header from "../components/Header/Header";
import { useParams } from "react-router-dom";

const displayNews = () => {

  
  return (
    <>
      <div className="container">
        <Header />

        <div className="displayNews__wrapper">
          <div className="content">
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default displayNews;
