import React from "react";
import name from "../assets/name.png";
import Dot from "../assets/Dot.png";
import defaultIcon from "../assets/defaultIcon.png";
import ecom from "../assets/ecom.png";
import project from "../assets/project.png";
import vector from "../assets/vector.png";
import userprofile from "../assets/userprofile.png";
import social from "../assets/social.png";
import blog from "../assets/blog.png";
import account from "../assets/account.png";
import corporate from "../assets/corporate.png";
import rightarrow from "../assets/rightarrow.png";
import downarrow from "../assets/downarrow.png";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="badge">
        <img src={name} className="badge-icon" alt="user" />
        <span className="badge-name">ByeWind</span>
      </div>

      <div className="menu-section">
        <div className="menu-header">
          Favorites{" "}
          <span style={{ color: "#1c1c1c33", marginLeft: "20px" }}>
            {" "}
            Recently
          </span>
        </div>
        <div className="menu-item">
          <img src={Dot} alt="dot" className="menu-icon" />
          Overview
        </div>
        <div className="menu-item">
          <img src={Dot} alt="dot" className="menu-icon" />
          Projects
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-header">Dashboards</div>
        <div className="menu-item active">
          <img src={defaultIcon} alt="default" className="menu-icon" />
          Default
        </div>
        <div className="menu-item">
          <img src={rightarrow} alt="arrow" className="menu-icon" />
          <img src={ecom} alt="ecom" className="menu-icon" />
          eCommerce
        </div>
        <div className="menu-item">
          <img src={rightarrow} alt="arrow" className="menu-icon" />
          <img src={project} alt="project" className="menu-icon" />
          Projects
        </div>
        <div className="menu-item">
          <img src={rightarrow} alt="arrow" className="menu-icon" />
          <img src={vector} alt="courses" className="menu-icon" />
          Online Courses
        </div>
      </div>

      <div className="menu-section">
        <div className="menu-header">Pages</div>
        <div className="menu-item expandable">
          <img src={downarrow} alt="arrow" className="menu-icon" />
          <img src={userprofile} alt="profile" className="menu-icon" />
          User Profile
        </div>
        <div className="sub-menu">
          <div className="sub-menu-item">Overview</div>
          <div className="sub-menu-item">Projects</div>
          <div className="sub-menu-item">Campaigns</div>
          <div className="sub-menu-item">Documents</div>
          <div className="sub-menu-item">Followers</div>
        </div>
        <div className="menu-item">
          <img src={rightarrow} alt="arrow" className="menu-icon" />
          <img src={account} alt="account" className="menu-icon" />
          Account
        </div>
        <div className="menu-item">
          <img src={rightarrow} alt="arrow" className="menu-icon" />
          <img src={corporate} alt="corporate" className="menu-icon" />
          Corporate
        </div>
        <div className="menu-item">
          <img src={rightarrow} alt="arrow" className="menu-icon" />
          <img src={blog} alt="blog" className="menu-icon" />
          Blog
        </div>
        <div className="menu-item">
          <img src={rightarrow} alt="arrow" className="menu-icon" />
          <img src={social} alt="social" className="menu-icon" />
          Social
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
