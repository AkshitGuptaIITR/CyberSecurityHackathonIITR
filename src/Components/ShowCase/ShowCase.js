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
        </div>
        <div className={style.image}>
          <img alt={"Police logo"} src={pic} className={style.Image_style} />
        </div>
      </div>
    </>
  );
};
export default ShowCase;
