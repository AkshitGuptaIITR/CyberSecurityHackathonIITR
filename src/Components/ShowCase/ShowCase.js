import React from "react";
import style from "./ShowCase.module.css";
import { BsCalendar3 } from "react-icons/bs";
import pic from "../../Assets/Group 970.jpg";

const ShowCase = () => {
  return (
    <>
      <div className={style.showcase}>
        <div className={style.showcase_cont}>
          <h1>DEVBHOOMI CYBER HACKATHON</h1>
          {/* <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Felis leo
            lectus ut amet at elementum pharetra potenti.
          </p> */}
          <button onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSfvIXEw_ArtFow1nt3HEmrxHXIcOulBTM6KxscQ9aYLUL9LBA/viewform')}>Register Now</button>
          {/* <p style={{fontSize: 12}}>*registrations open till xx/xx/2022</p> */}
        </div>
        <div className={style.image}>
          <img alt={"Police logo"} src={pic} className={style.Image_style} />
        </div>
      </div>
    </>
  );
};
export default ShowCase;
