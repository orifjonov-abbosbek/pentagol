import React from "react";
import "./News.scss";
import img from "../../assets/for_news1.png";
const News = () => {
  const data = [
    { teamId: 1, teamName: "Team A", countGames: 10, scores: 30 },
    { teamId: 2, teamName: "Team B", countGames: 12, scores: 28 },
    { teamId: 3, teamName: "Team C", countGames: 8, scores: 24 },
    { teamId: 4, teamName: "Team D", countGames: 11, scores: 33 },
    { teamId: 4, teamName: "Team D", countGames: 11, scores: 33 },
    { teamId: 4, teamName: "Team D", countGames: 11, scores: 33 },
    { teamId: 4, teamName: "Team D", countGames: 11, scores: 33 },
    { teamId: 4, teamName: "Team D", countGames: 11, scores: 33 },
    { teamId: 4, teamName: "Team D", countGames: 11, scores: 33 },
    { teamId: 4, teamName: "Team D", countGames: 11, scores: 33 },
    { teamId: 4, teamName: "Team D", countGames: 11, scores: 33 },
    { teamId: 4, teamName: "Team D", countGames: 11, scores: 33 },
    { teamId: 4, teamName: "Team D", countGames: 11, scores: 33 },
    { teamId: 4, teamName: "Team D", countGames: 11, scores: 33 },
    { teamId: 4, teamName: "Team D", countGames: 11, scores: 33 },
    { teamId: 4, teamName: "Team D", countGames: 11, scores: 33 },
  ];
  return (
    <>
      <section className="news">
        <div className="container">
          <div className="news__wrapper">
            <div className="news__section">
              <div className="main__news">
                <h3>
                  Faqatgina muvaffaqiyatli qur'a Rossiyani Jahon chempionatiga
                  olib boradi: bo'g'inlar oldidagi barcha maketlar
                </h3>
                <p>2 soat oldin</p>
              </div>

              <ul className="news_list">
                <li className="news_list_item">
                  <h3>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h3>
                  <p>3 soat oldin</p>
                </li>
                <li className="news_list_item">
                  <h3>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h3>
                  <p>3 soat oldin</p>
                </li>
                <li className="news_list_item">
                  <h3>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h3>
                  <p>3 soat oldin</p>
                </li>
                <li className="news_list_item">
                  <h3>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h3>
                  <p>3 soat oldin</p>
                </li>
                <li className="news_list_item">
                  <h3>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h3>
                  <p>3 soat oldin</p>
                </li>
                <li className="news_list_item">
                  <h3>
                    Messi Goal.com saytida yilning eng yaxshi futbolchisi deb
                    topildi
                  </h3>
                  <p>3 soat oldin</p>
                </li>
              </ul>
            </div>

            <div className="jadval">
              <h2>Jadval</h2>
              <select name="" id="">
                <option value="Italiya.Aseriya">Italiya. A seriya</option>
                <option value="Premier Liga">Premier Liga</option>
                <option value="LaLiga">LaLiga</option>
                <option value="Bundesliga">Bundesliga</option>
                <option value="Ligue 1 ">Ligue 1 </option>
              </select>
              <li className="score__header">
                <span>№</span>
                <span className="team__name">Команда</span>
                <span>И</span>
                <span>О</span>
              </li>
              <ul className="score_table">
                {data.map((team) => (
                  <li className="score_table_item" key={team.teamId}>
                    <span>{team.teamId}</span>
                    <span className="team__name">{team.teamName}</span>
                    <span>{team.countGames}</span>
                    <span>{team.scores}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
