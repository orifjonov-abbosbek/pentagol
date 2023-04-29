import React from 'react'
import "./ReUsableScore.scss"

const ReUsableScore = (props) => {
  return (
    <>
      <div className="football-score">
        <div className="team">
          <img src={props.team1img} alt={props.homeTeam} />
          <p>{props.team1}</p>
        </div>
        <div className="score">
          <p>
            {props.team1score} - {props.team2core}
          </p>
        </div>
        <div className="team">
          <img src={props.team2} alt={props.awayTeam} />
          <p>{props.team2img}</p>
        </div>
      </div>
    </>
  );
}

export default ReUsableScore