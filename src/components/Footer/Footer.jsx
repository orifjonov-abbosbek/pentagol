import React from "react";
import "./Footer.scss";
import twitter from "../../assets/Twitter.svg";
import yt from "../../assets/YouTube.svg";
import Logo from "../../assets/logo.svg";
import vk from "../../assets/vk.svg";
import skype from "../../assets/Skype.svg";
import insta from '../../assets/Insta.svg';
import fb from '../../assets/fb.svg';
import tg from '../../assets/tg.svg';
const Footer = () => {
  return (
    <>
      <footer className="site_footer">
        <div className="container">
          <div className="footer__wrapper">
            <a className="logo" href="">
              <img src={Logo} alt="" />
            </a>

            <div className="footer__navigation">
              <ul className="footer_list">
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Main
                  </a>
                </li>
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Mach center
                  </a>
                </li>
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Football
                  </a>
                </li>
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Tennis
                  </a>
                </li>
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Cybersport
                  </a>
                </li>
              </ul>

              <ul className="footer_list">
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Main
                  </a>
                </li>
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Mach center
                  </a>
                </li>
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Football
                  </a>
                </li>
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Tennis
                  </a>
                </li>
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Cybersport
                  </a>
                </li>
              </ul>

              <ul className="footer_list">
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Main
                  </a>
                </li>
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Mach center
                  </a>
                </li>
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Football
                  </a>
                </li>
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Tennis
                  </a>
                </li>
                <li className="footer_list_item">
                  <a className="footer_list_item_link" href="">
                    Cybersport
                  </a>
                </li>
              </ul>
            </div>

            <div className="footer_social_links">
              <div className="first">

              <img src={twitter} alt="" />
              <img src={yt} alt="" />
              <img src={vk} alt="" />
              </div>
              <div className="second">

              <img src={skype} alt="" />
              <img src={insta} alt="" />
              <img src={fb} alt="" />
              <img src={tg} alt="" />
              </div>
            </div>
          </div>
          <div className="line"></div>
          <p>© 2023 Footboll. All rights reserved</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
