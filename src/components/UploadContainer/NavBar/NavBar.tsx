import React from "react";
import {
  FaFacebook,
  FaGlobeAfrica,
  FaInstagram,
  FaTwitter,
  FaLaptop,
  FaGoogleDrive,
  FaCamera,
  FaDropbox,
} from "react-icons/fa";
import "./NavBar.styles.css";

type CustomValue = any;

interface NavBarProps {
  setInnerContainer: CustomValue;
}

export const NavBar: React.FC<NavBarProps> = ({ setInnerContainer }) => {
  return (
    <div className="nav">
      <nav className="nav-options">
        <div className="nav-options-icons">
          <ul className="nav-options-icon-list">
            <li
              onClick={() => {
                setInnerContainer("file");
              }}
              className="nav-icon"
            >
              <FaLaptop className="icon" /> My Files
            </li>
            <li
              onClick={() => {
                setInnerContainer("address");
              }}
              className="nav-icon"
            >
              <FaGlobeAfrica className="icon" /> Web Address
            </li>
            <li
              onClick={() => {
                setInnerContainer("camera");
              }}
              className="nav-icon"
            >
              <FaCamera className="icon" />
              Camera
            </li>
            
            <li
              onClick={() => {
                setInnerContainer("facebook");
              }}
              className="nav-icon"
            >
              <FaFacebook className="icon" /> Facebook
            </li>
            <li
              onClick={() => {
                setInnerContainer("instagram");
              }}
              className="nav-icon"
            >
              <FaInstagram className="icon" /> Instagram
            </li>
            <li
              onClick={() => {
                setInnerContainer("twitter");
              }}
              className="nav-icon"
            >
              <FaTwitter className="icon" /> Twitter
            </li>
            <li
              onClick={() => {
                setInnerContainer("google");
              }}
              className="nav-icon"
            >
              <FaGoogleDrive className="icon" /> Google Drive
            </li>
            <li
              onClick={() => {
                setInnerContainer("dropbox");
              }}
              className="nav-icon"
            >
              <FaDropbox className="icon" />
              Dropbox
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
