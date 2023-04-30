import {useContext} from "react";
import PropTypes from "prop-types";
import "./ReusableButton.scss";
 import ThemeContext from "../../Context/ThemeContext";


const Button = ({ label, onClick }) => {
   const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  return (
    <button className={darkMode ? 'buttonDark' : 'button'} onClick={onClick}>
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Button;
