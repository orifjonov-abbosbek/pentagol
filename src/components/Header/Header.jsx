import React, { useContext, useEffect } from "react";
import Logo from "../../assets/logo.svg";
import DarkModeIcon from "../../assets/dark_mode.svg";
import "./Header.scss";
import "./darkMode.scss";
import ThemeContext from "../../Context/ThemeContext";

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("darkMode");
    } else {
      document.body.classList.remove("darkMode");
    }
  }, [darkMode]);

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <a href="">
              <img src={Logo} alt="" />
            </a>
            <button onClick={toggleDarkMode} className="header__dark_mode_btn">
              <img src={DarkModeIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
