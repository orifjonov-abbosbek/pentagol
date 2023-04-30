import { useContext } from "react";
import { DataContext } from "../DataContext/Contect";
import { useParams } from "react-router-dom";
import Header from "../components/Header/Header";
import "./displayNews.scss";
import LatestNews from "../components/LatestNews/LatestNews";
import Footer from "../components/Footer/Footer";
import ThemeContext from "../Context/ThemeContext";

const DisplayNews = () => {

   const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const { id } = useParams();
  const data = useContext(DataContext);
  console.log(data);
  const news = data[id];
  console.log(news);

  return (
    <div>
      <Header />
      <div className="container">
        <div className={darkMode ? 'articleDark' : 'content'}>
          <div className="">
            <p className="date">{news.newsDate}</p>
            <h2>{news.newsTitle}</h2>
            <img className="img" src={news.newsImg2} alt="" />
            <article>
              Ilon Mask (Elon Mask, Tesla va boshqa loyihalar rahbari) bir yarim
              hafta ichida ikkinchi marta Xitoyning hukmron doiralari va
              fuqarolariga murojaat qildi. Videoda u ularni ushbu mamlakatda
              biznesni rivojlantirish va kengaytirishga sarmoya kiritishga
              tayyor ekanligiga ishontirdi. Qayta ishlangan ma'lumotlarning
              xavfsizligiga alohida e'tibor qaratiladi.
              <br /> <br />
              Ular faqat Xitoyning o'zida saqlanadi va shuning uchun istalgan
              vaqtda O'rta Qirollik hukumati foydalanishi mumkin bo'ladi.
              <br />
              <br />
              Ilon Mask Xitoyda hafta oxirida bo‘lib o‘tgan Butunjahon internet
              konferensiyasining tomoshabinlariga videomurojaati chog‘ida yangi
              bayonotlar berdi. Kompaniya Cisco Systems (Chak Robbins), Intel
              (Pat Gelsinger) va Qualcomm (Kristiano Amon) rahbarlaridan tashkil
              topgan bo'lib, Xitoy Xalq Respublikasi biznesi manfaatlarini
              Alibaba va Xiaomi rahbarlari himoya qilishgan.
              <br />
              <br />
              Tadbirni Xitoy Xalq Respublikasi Davlat kengashi bosh vaziri
              o‘rinbosari Lyu Xe ochib berdi va Si Szinpinning Osmon
              imperiyasining shaffof raqamli iqtisodiyotni yaratish uchun barcha
              kuchlar bilan ishlash istagi haqidagi so‘zlarini keltirdi.
              <br />
              <br />
              Yaqin kelajakda Tesla nafaqat Shanxay filialida elektromobillar
              ishlab chiqarishni kengaytiribgina qolmay, balki mahalliy studiya
              yordamida elektromobilning arzon modelini (narxi 25 000 dollardan
              kam) ishlab chiqmoqchi. Xitoy Xalq Respublikasida yig‘ilgan Tesla
              Model Y va Model 3 elektromobillari allaqachon Yevropaga eksport
              qilinmoqda.
            </article>
          </div>

          <div className="asosiy_section">
            <div className="asosiy">
              <h2>Asosiy</h2>
              <ul className="asosiy_list">
                <li className="asosiy_list_item">
                  <h5>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h5>
                  <p>12.05.2021 12:54</p>

                  <div className="line"></div>
                </li>
                <li className="asosiy_list_item">
                  <h5>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h5>
                  <p>12.05.2021 12:54</p>

                  <div className="line"></div>
                </li>
                <li className="asosiy_list_item">
                  <h5>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h5>
                  <p>12.05.2021 12:54</p>

                  <div className="line"></div>
                </li>

                <li className="asosiy_list_item">
                  <h5>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h5>
                  <p>12.05.2021 12:54</p>

                  <div className="line"></div>
                </li>
              </ul>
            </div>

            <div className="asosiy">
              <h2>Asosiy</h2>
              <ul className="asosiy_list">
                <li className="asosiy_list_item">
                  <h5>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h5>
                  <p>12.05.2021 12:54</p>

                  <div className="line"></div>
                </li>
                <li className="asosiy_list_item">
                  <h5>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h5>
                  <p>12.05.2021 12:54</p>

                  <div className="line"></div>
                </li>
                <li className="asosiy_list_item">
                  <h5>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h5>
                  <p>12.05.2021 12:54</p>

                  <div className="line"></div>
                </li>

                <li className="asosiy_list_item">
                  <h5>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h5>
                  <p>12.05.2021 12:54</p>

                  <div className="line"></div>
                </li>
                <li className="asosiy_list_item">
                  <h5>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h5>
                  <p>12.05.2021 12:54</p>

                  <div className="line"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <LatestNews />
      <Footer />
    </div>
  );
};

export default DisplayNews;
