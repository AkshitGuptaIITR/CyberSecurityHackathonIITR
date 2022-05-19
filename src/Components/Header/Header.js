/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
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
    const Timeline = document.getElementById("timeline");
    const Schedule = document.getElementById("schedule");
    const ProblemStatements = document.getElementById("problem");
    const Partners = document.getElementById("partner");
    const Contact = document.getElementById("contact");

    appDiv.addEventListener("scroll", (e) => {
      console.log("cehcl");
      observer.observe(Jury);
      observer.observe(Speaker);
      observer.observe(About);
      observer.observe(Timeline);
      observer.observe(Schedule);
      observer.observe(ProblemStatements);
      observer.observe(Partners);
      observer.observe(Contact);
    });
  });

  // document.getElementById('app').addEventListener('scroll', function(){
  //   console.log('asdsa')
  // })

  return (
    <header className={style.header} id="header">
      <div>
        <img
          src={logo}
          alt="IITR"
          onClick={() => window.open("https://www.iitr.ac.in/")}
        />
        <img
          src={policeLogo}
          style={{ marginLeft: "20px" }}
          alt="UK Police"
          onClick={() => window.open("https://uttarakhandpolice.uk.gov.in/")}
        />
      </div>
      {width <= 728 ? (
        <>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              height: "80px",
              width: "40%",
              marginTop: "26px",
              justifyContent: "flex-end",
            }}
          >
            <div
              className={style.hamburger}
              style={{ backgroundColor: `${open ? "black" : ""}` }}
              onClick={handleClick}
            >
              <div className={style.line}></div>
              <div className={style.line}></div>
              <div className={style.line}></div>
            </div>
          </div>
          <div
            className={style.mobileLinks}
            style={{ display: `${open ? "flex" : "none"}` }}
            onClick={handleClick}
          >
            <a
              href="#about"
              className={activeDiv === "about" ? style.selected : ""}
            >
              About
            </a>
            <a href="#speaker">Speakers</a>
            <a href="#jury">Jury</a>
            <a href="#timeline">Timeline</a>
            <a href="#schedule">Schedule</a>
            <a href="#problem">Problem Statement</a>
            <a href="">Partners</a>
            <a href="#contact">Contact</a>
          </div>

          <div className={`${style.circle} ${nameClass}`}></div>
        </>
      ) : (
        <>
          <div className={style.links}>
            <div>
              <a
                href="#about"
                onClick={() => setActiveDiv("about")}
                className={activeDiv === "about" ? style.selected : ""}
              >
                About
              </a>
              <div
                className={style.dot}
                style={{
                  visibility: `${activeDiv === "about" ? "" : "hidden"}`,
                }}
              ></div>
            </div>
            <div>
              <a
                href="#speaker"
                onClick={() => setActiveDiv("speaker")}
                className={activeDiv === "speaker" ? style.selected : ""}
              >
                Speakers
              </a>
              <div
                className={style.dot}
                style={{
                  visibility: `${activeDiv === "speaker" ? "" : "hidden"}`,
                }}
              ></div>
            </div>
            <div>
              <a
                href="#jury"
                onClick={() => setActiveDiv("jury")}
                className={activeDiv === "jury" ? style.selected : ""}
              >
                Jury
              </a>
              <div
                className={style.dot}
                style={{
                  visibility: `${activeDiv === "jury" ? "" : "hidden"}`,
                }}
              ></div>
            </div>
            <div>
              <a
                href="#timeline"
                onClick={() => setActiveDiv("timeline")}
                className={activeDiv === "timeline" ? style.selected : ""}
              >
                Timeline
              </a>
              <div
                className={style.dot}
                style={{
                  visibility: `${activeDiv === "timeline" ? "" : "hidden"}`,
                }}
              ></div>
            </div>
            <div>
              <a
                href="#schedule"
                className={activeDiv === "schedule" ? style.selected : ""}
              >
                Schedule
              </a>
              <div
                className={style.dot}
                style={{
                  visibility: `${activeDiv === "schedule" ? "" : "hidden"}`,
                }}
              ></div>
            </div>
            <div>
              <a
                href="#problem"
                onClick={() => setActiveDiv("problem")}
                className={activeDiv === "problem" ? style.selected : ""}
              >
                Problem Statement
              </a>
              <div
                className={style.dot}
                style={{
                  visibility: `${activeDiv === "problem" ? "" : "hidden"}`,
                }}
              ></div>
            </div>
            <div>
              <a
                href="#partner"
                className={activeDiv === "partner" ? style.selected : ""}
                onClick={() => setActiveDiv("partner")}
              >
                Partners
              </a>
              <div
                className={style.dot}
                style={{
                  visibility: `${activeDiv === "partner" ? "" : "hidden"}`,
                }}
              ></div>
            </div>
            <div>
              <a
                href="#contact"
                onClick={() => setActiveDiv("contact")}
                className={activeDiv === "contact" ? style.selected : ""}
              >
                Contact
              </a>
              <div
                className={style.dot}
                style={{
                  visibility: `${activeDiv === "contact" ? "" : "hidden"}`,
                }}
              ></div>
            </div>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
