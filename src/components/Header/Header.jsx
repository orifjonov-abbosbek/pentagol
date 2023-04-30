import React from "react";
import Logo from "../../assets/logo.svg";
import DarkModeIcon from "../../assets/dark_mode.svg";
import "./Header.scss";
import "./darkMode.scss";

const Header = () => {
  const [darkMode, setDarkMode] = React.useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

   React.useEffect(() => {
     if (darkMode) {
       document.body.classList.add("dark-mode");
     } else {
       document.body.classList.remove("dark-mode");
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
