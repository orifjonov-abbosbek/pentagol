import {useContext} from "react";
import "./ReUsableScore.scss";
 import ThemeContext from "../../Context/ThemeContext";

const ReUsableScore = (props) => {

   const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  
  return (
    <>
      <div className=''>
        <div className={darkMode ? "scoreDark" : "football_score"}>
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
        <div className={darkMode ? 'dataDark' : 'data'}>{props.data}</div>
      </div>
    </>
  );
};

export default ReUsableScore;
