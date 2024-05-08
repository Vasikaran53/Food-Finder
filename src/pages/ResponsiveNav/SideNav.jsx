import React, { useRef } from "react";
import "./SideNav.css";
import { assets } from "../../assets/assets";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const SideNav = () => {
  const open = useRef();
  const op = () => {
    open.current.style.left = ["0px"];
  };
  return (
    <>
      <div ref={open} className="Side">
        <img className="close" src={assets.cross_icon} alt="" />

        <ul>
          <a href="#head">Home</a>
          <a href="explore-menu">Menu</a>
          <a href="#app-download">Mobile-app</a>
          <a href="#footer">contact us</a>
        </ul>
        <div className="h">
          <FontAwesomeIcon
            icon={faBars}
            className="ham"
            onClick={() => {
              op();
            }}
          />
        </div>
      </div>
    </>
  );
};

export default SideNav;
