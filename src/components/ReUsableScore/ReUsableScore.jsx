import React from "react";
import "./ReUsableScore.scss";

const ReUsableScore = (props) => {
  return (
    <>
      <div className="reusable_score">
        <div className="football_score">
          <div className="team">
            <img src={props.team1img} />
            <p className="name">{props.team1}</p>
          </div>
          <div className="score">
            <p>
              {props.team1score} - {props.team2score}
            </p>
          </div>
          <div className="team">
            <p className="name">{props.team2}</p>
            <img src={props.team2img} />
          </div>
        </div>
        <div className="data">{props.data}</div>
      </div>
    </>
  );
};

export default ReUsableScore;
