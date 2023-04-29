import React from "react";
import Logo from "../../assets/logo.svg";
import DarkModeIcon from "../../assets/dark_mode.svg";
import "./Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="container">
          <div className="header__wrapper">
            <a href="">
              <img src={Logo} alt="" />
            </a>
            <button className="header__dark_mode_btn">
              <img src={DarkModeIcon} alt="" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
