import React from "react";
import aSeria from "../../assets/aseria.svg";
import PremierL from "../../assets/premier.svg";
import LaLiga from "../../assets/laliga.svg";
import Bundes from "../../assets/bundes.svg";
import Liga1 from "../../assets/liga1.svg";
import "./Filter.scss";

const Filter = () => {
  return (
    <>
      <section className="filterByLeague">
        <div className="container">
          <div className="filter__wrapper">
            <ul className="filter__list">
              <li className="filter__list_item">
                <img src={aSeria} alt="" />
                Italiya. Seriya A
              </li>
              <li className="filter__list_item">
                <img src={PremierL} alt="" />
                Premier Liga
              </li>

              <li className="filter__list_item">
                <img src={LaLiga} alt="" />
                LaLiga
              </li>
              <li className="filter__list_item">
                <img src={Bundes} alt="" />
                Bundesliga
              </li>
              <li className="filter__list_item">
                <img src={Liga1} alt="" />
                Ligue 1
              </li>
            </ul>
          </div>

        </div>
      </section>
    </>
  );
};

export default Filter;
