import React, { useState } from "react";
import iconLeft from "../assets/iconLeft.png";
import star from "../assets/star.png";
import searchIcon from "../assets/searchIcon.png";
import sun from "../assets/sun.png";
import darkMode from "../assets/darkMode.png";
import clock from "../assets/clock.png";
import bell from "../assets/bell.png";
import { Link } from "react-router-dom";

export default function Header() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.body.className = isDarkMode ? "light-theme" : "dark-theme";
  };

  return (
    <>
      <div className="header-container">
        <div className="left-section">
          <img src={iconLeft} alt="Menu" />
          <img src={star} alt="Star" />
          <span className="top-header">
            <Link to="/">Dashboard</Link>
            <span style={{ color: "#1c1c1c66", marginLeft: "20px" }}> /</span>
            <span style={{ color: "#1c1c1c", marginLeft: "20px" }}>
              <Link to="/orderList">OrderList</Link>
            </span>
          </span>
        </div>

        <div className="right-section">
          <div className="search-bar">
            <img src={searchIcon} alt="Search" />
            <input type="text" placeholder="Search" />
          </div>
          <img
            src={isDarkMode ? darkMode : sun}
            alt="Theme"
            className="theme-toggle-icon"
            onClick={toggleTheme}
          />

          <img className="mode" src={clock} alt="History" />
          <img className="mode" src={bell} alt="Notifications" />
          <img className="mode" src={iconLeft} alt="Profile" />
        </div>
      </div>
    </>
  );
}
