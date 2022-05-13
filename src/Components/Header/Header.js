import React from "react";
import style from "./Header.module.css";
import logo from "../../Assets/iitrlogo.png";

const Header = () => {
  return (
    <header className={style.header}>
      <img src={logo} alt="" />
      <div className={style.links}>
        <a href="">About</a>
        <a href="">Speakers</a>
        <a href="">Jury</a>
        <a href="">Timeline</a>
        <a href="">Schedule</a>
        <a href="">Problem Statement</a>
        <a href="">Partners</a>
        <a href="">Contact</a>
      </div>
    </header>
  );
};

export default Header;
