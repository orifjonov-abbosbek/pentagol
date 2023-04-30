import React from "react";
import latest1 from "../../assets/latest1.png";
import "./LatestNews.scss";

const LatestNews = () => {
  const data = [
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
    {
      newsImg: latest1,
      newsTitle:
        'Zidan "Manchester Yunayted"ga Premer-ligaga tayyor emasligini aytdi',
      newsDesc:
        'Zidan "Manchester Yunayted" ga Premer-ligaga tayyor emasligini aytdi ',

      newsDate: "12.05.2021  12:54",
    },
  ];
  return (
    <>
      <section className="latestNews">
        <div className="container">
          <div className="latestNews__wrapper">
            <div className="top">
              <h2>So'ngi yangiliklar</h2>
            </div>

            <div className="contents">
              <ul className="latestNews_list">
                {data.map((item) => (
                  <li className="listItem">
                    <img className="newsImg" src={item.newsImg} alt="" />
                    <h3>{item.newsTitle}</h3>
                    <p>{item.newsDesc}</p>
                    <p className="date">{item.newsDate}</p>
                  </li>
                ))}
              </ul>
            </div>

            <button className="loadMore">Barchasi ko’rish</button>
          </div>
        </div>
      </section>
    </>
  );
};

export default LatestNews;
