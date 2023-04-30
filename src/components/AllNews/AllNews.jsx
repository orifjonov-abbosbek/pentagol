import { useContext } from "react";
import { DataContext } from "../../DataContext/Contect";
import ReusableButton from "../ReusableButton/ReusableButton";
import ThemeContext from "../../Context/ThemeContext";
import { Link } from "react-router-dom";

import "./AllNews.scss";

const AllNews = () => {
  const data = useContext(DataContext);
   const { darkMode, toggleDarkMode } = useContext(ThemeContext);


  return (
    <>
      <section className={darkMode ? 'allnewsDark' : 'allnews'}>
        <div className="container">
          <div className="allnews_wrapper">
            <div className="top">
              <h2>Barcha yangiliklar</h2>
            </div>

            <div className="contents">
              <ul className="latestNews_list">
                {data.map((item, index) => (
                  <li className="listItem" key={index}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={`/news/${index}`}
                    >
                      <img className="newsImg" src={item.newsImg3} alt="" />
                      <h3>{item.newsTitle}</h3>
                      <p>{item.newsDesc}</p>
                      <p className="date">{item.newsDate}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <ReusableButton label="Barchasi ko’rish" />
          </div>
        </div>
      </section>
    </>
  );
};

export default AllNews;
