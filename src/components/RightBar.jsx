import React from "react";
import notifyIcon from "../assets/notifyIcon.png";
import newUser from "../assets/newUser.png";
import boardcast from "../assets/boardcast.png";
import activeOne from "../assets/activeOne.png";
import activeTwo from "../assets/activeTwo.png";
import activeThree from "../assets/activeThree.png";
import activeFour from "../assets/activeFour.png";
import activeFive from "../assets/activeFive.png";
import contactOne from "../assets/contactOne.png";
import contactTwo from "../assets/contactTwo.png";
import contactThree from "../assets/contactThree.png";
import contactFour from "../assets/contactFour.png";
import contactFive from "../assets/contactFive.png";
import contactSix from "../assets/contactSix.png";
import "../App.css";

function RightBar() {
  return (
    <div className="rightbar">
      <div className="section">
        <h4 className="section-title">Notifications</h4>
        <div className="notification-item">
          <img src={notifyIcon} alt="notify" className="icon" />
          <span>You have a bug that needs...</span>
        </div>
        <div className="notification-item">
          <img src={newUser} alt="new user" className="icon" />
          <span>New user registered</span>
        </div>
        <div className="notification-item">
          <img src={notifyIcon} alt="notify" className="icon" />
          <span>You have a bug that needs...</span>
        </div>
        <div className="notification-item">
          <img src={boardcast} alt="broadcast" className="icon" />
          <span>Andi Lane subscribed to you</span>
        </div>
      </div>

      <div className="section">
        <h4 className="section-title">Activities</h4>
        <div className="activity-item">
          <img src={activeOne} alt="activity" className="icon" />
          <span>You have a bug that needs...</span>
        </div>
        <div className="activity-item">
          <img src={activeTwo} alt="activity" className="icon" />
          <span>Released a new version</span>
        </div>
        <div className="activity-item">
          <img src={activeThree} alt="activity" className="icon" />
          <span>Submitted a bug</span>
        </div>
        <div className="activity-item">
          <img src={activeFour} alt="activity" className="icon" />
          <span>Modified A data in Page X</span>
        </div>
        <div className="activity-item">
          <img src={activeFive} alt="activity" className="icon" />
          <span>Deleted a page in Project X</span>
        </div>
      </div>

      <div className="section-contact">
        <h4 className="section-title">Contacts</h4>
        <div className="contact-item">
          <img src={contactOne} alt="contact" className="icon" />
          <span>Natali Craig</span>
        </div>
        <div className="contact-item">
          <img src={contactTwo} alt="contact" className="icon" />
          <span>Drew Cano</span>
        </div>
        <div className="contact-item">
          <img src={contactThree} alt="contact" className="icon" />
          <span>Orlando Diggs</span>
        </div>
        <div className="contact-item">
          <img src={contactFour} alt="contact" className="icon" />
          <span>Andi Lane</span>
        </div>
        <div className="contact-item">
          <img src={contactFive} alt="contact" className="icon" />
          <span>Kate Morrison</span>
        </div>
        <div className="contact-item">
          <img src={contactSix} alt="contact" className="icon" />
          <span>Koray Okumus</span>
        </div>
      </div>
    </div>
  );
}

export default RightBar;
