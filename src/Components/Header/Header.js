/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import style from "./Header.module.css";
import logo from "../../Assets/iitrlogo.png";
import { useWindowWidth } from "@react-hook/window-size";

const Header = () => {
  const width = useWindowWidth();
  // const [open ,setOpen] = useState(false);

  return (
    <header className={style.header}>
      <img src={logo} alt="" />
      {width <= 728 ? (
        <>
          {/* <div className={style.hamburger} onClick={() => setOpen(!open)}>
            <div className={style.line}></div>
            <div className={style.line}></div>
            <div className={style.line}></div>
          </div> */}
        </>
      ) : (
        <>
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
        </>
      )}
    </header>
  );
};

export default Header;
