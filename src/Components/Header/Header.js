/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, {useEffect, useState } from "react";
import style from "./Header.module.css";
import logo from "../../Assets/iitrlogo.png";
import policeLogo from "../../Assets/policeLogo.png";
import { useWindowWidth } from "@react-hook/window-size";

const Header = () => {
  const width = useWindowWidth();
  const [open, setOpen] = useState(false);
  const [nameClass, setNameClass] = useState("");
  const [activeDiv, setActiveDiv] = useState("about");

  const handleClick = () => {
    setOpen(!open);
    if (nameClass === "") {
      setNameClass(style.navBarOpen);
    } else {
      setNameClass("");
    }
  };

  useEffect(() => {
    var observer = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) {
          setActiveDiv(entries[0].target.id);
        }
      },
      { threshold: [1] }
    );

    const appDiv = document.getElementById("app");
    const About = document.getElementById("about");
    const Speaker = document.getElementById("speaker");
    const Jury = document.getElementById("jury");
    const Timeline = document.getElementById('timeline');
    const Schedule = document.getElementById('schedule');
    const ProblemStatements = document.getElementById('problem');
    const Partners = document.getElementById('partner');
    const Contact = document.getElementById('contact');

    console.log(appDiv)

    appDiv.addEventListener("scroll", (e) => {
      console.log('cehcl')
      observer.observe(Jury);
      observer.observe(Speaker);
      observer.observe(About);
      observer.observe(Timeline);
      observer.observe(Schedule);
      observer.observe(ProblemStatements);
      observer.observe(Partners);
      observer.observe(Contact);
    });
  }, [activeDiv]);

  document.getElementById('app').addEventListener('scroll', function(){
    console.log('asdsa')
  })
  
  console.log(activeDiv)

  return (
    <header className={style.header} id="header">
      <div>
        <img src={logo} alt="" />
        <img src={policeLogo} style={{ marginLeft: "20px" }} alt="" />
      </div>
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
