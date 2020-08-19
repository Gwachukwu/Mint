import React from "react";
import profile_image from "../Images/profile-image.png";

const Header = () => {
  return (
    <nav className = "nav-bar">
      <h1>TransMonitor</h1>
      <div className="search">
          <i className="search-icon"></i>
        <input type="search" name="search" id="search" placeholder="Search..."/>
      </div>
      <p>Support</p>
      <p>FAQ</p>
      <div className="bell">
        <i className="bell-icon"></i>
        <p className="bell-alert">8</p>
      </div>
      <div className="nav-profile">
          <p>
            Hello<br></br> <span>Oluwaleke Ojo</span>
          </p>
        <div>
          <img src={profile_image} alt="profile" />
        </div>
      </div>
    </nav>
  );
};

export default Header;
