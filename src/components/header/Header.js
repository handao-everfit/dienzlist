import React, {useContext} from "react";
import Headroom from "react-headroom";
import "./Header.scss";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import StyleContext from "../../contexts/StyleContext";
import logo from "../header/logo.png";

function Header() {
  const {isDark} = useContext(StyleContext);

  return (
    <Headroom>
      <header className={isDark ? "dark-menu header" : "header"}>
        <div className="logo-container">
          <a href="/">
            {/* <span className="grey-color"> &lt;</span>
          <span className="logo-name">{greeting.username}</span>
          <span className="grey-color">/&gt;</span>
          <h1>helo</h1> */}
            <img className="logo" src={logo} alt="logo" />
          </a>
        </div>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label
          className="menu-icon"
          htmlFor="menu-btn"
          style={{color: "white"}}
        >
          <span className={isDark ? "navicon navicon-dark" : "navicon"}></span>
        </label>
        <ul className={isDark ? "dark-menu menu" : "menu"}>
          <li>
            <a href="#about">Về Điên'z List</a>
          </li>

          <li>
            <a href="#podcast">Nghe Podcast</a>
          </li>
          <li>
            <a href="#guests">Điên'z Guests</a>
          </li>
          <li>
            <a href="#education">Đội ngủ 🛏</a>
          </li>
          <li>
            <a
              href="https://www.buymeacoffee.com/dienzlist"
              target="_blank"
              rel="noreferrer noopener"
            >
              Ủng Hộ
            </a>
          </li>
          <li>
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <ToggleSwitch />
            </a>
          </li>
        </ul>
      </header>
    </Headroom>
  );
}
export default Header;
