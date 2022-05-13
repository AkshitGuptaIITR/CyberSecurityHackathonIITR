/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import style from "./Header.module.css";
import logo from "../../Assets/iitrlogo.png";
import { useWindowWidth } from "@react-hook/window-size";

const Header = () => {
  const width = useWindowWidth();
  const [open, setOpen] = useState(false);
  const [nameClass, setNameClass] = useState("");

  const handleClick = () => {
    setOpen(!open);
    if (nameClass === "") {
      setNameClass(style.navBarOpen);
    } else {
      setNameClass("");
    }
  };

  return (
    <header className={style.header}>
      <img src={logo} alt="" />
      {width <= 728 ? (
        <>
          <div
            className={style.mobileLinks}
            style={{ display: `${open ? "flex" : "none"}` }}
            onClick={handleClick}
          >
            <a href="#about">About</a>
            <a href="#speaker">Speakers</a>
            <a href="#jury">Jury</a>
            <a href="#timeline">Timeline</a>
            <a href="#schedule">Schedule</a>
            <a href="#problem">Problem Statement</a>
            <a href="">Partners</a>
            <a href="#contact">Contact</a>
          </div>
          <div
            className={style.hamburger}
            style={{ backgroundColor: `${open ? "black" : ""}` }}
            onClick={handleClick}
          >
            <div className={style.line}></div>
            <div className={style.line}></div>
            <div className={style.line}></div>
          </div>
          <div className={`${style.circle} ${nameClass}`}></div>
        </>
      ) : (
        <>
          <div className={style.links}>
            <a href="#about">About</a>
            <a href="#speaker">Speakers</a>
            <a href="#jury">Jury</a>
            <a href="#timeline">Timeline</a>
            <a href="#schedule">Schedule</a>
            <a href="#problem">Problem Statement</a>
            <a href="">Partners</a>
            <a href="#contact">Contact</a>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
