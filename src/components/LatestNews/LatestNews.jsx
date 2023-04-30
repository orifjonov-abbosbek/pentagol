import { useContext } from "react";
import { DataContext } from "../../DataContext/Contect";
import { Link } from "react-router-dom";
import ReusableButton from "../ReusableButton/ReusableButton";
 import ThemeContext from "../../Context/ThemeContext";
import './LatestNews.scss'

const LatestNews = () => {


   const { darkMode, toggleDarkMode } = useContext(ThemeContext);
  const data = useContext(DataContext);

  return (
    <section className={ darkMode ? 'latestnewsDark' : 'latestNews'}>
      <div className="container">
        <div className="latestNews__wrapper">
          <div className="top">
            <h2>So'ngi yangiliklar</h2>
          </div>

          <div className="contents">
            <ul className="latestNews_list">
              {data.map((item, index) => (
                <li className="listItem" key={index}>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`/news/${index}`}
                  >
                    <img className="newsImg" src={item.newsImg} alt="" />
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
  );
};

export default LatestNews;
