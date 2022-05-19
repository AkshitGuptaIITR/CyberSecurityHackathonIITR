import React, { useState } from "react";
import style from "./Speaker.module.css";
import pic1 from "../../Assets/image 1462.jpg";
import pic2 from "../../Assets/image 1463.jpg";
import pic3 from "../../Assets/image 1464.jpg";
import pic4 from "../../Assets/image 1465.jpg";
import left from "../../Assets/left.png";
import right from "../../Assets/right.png";

const Speaker = () => {
  const [id, setId] = useState(0);

  const handleLeft = () => {
    if (id === 0) {
      setId(array.length - 1);
    } else {
      setId(id - 1);
    }
  };

  const handleRight = () => {
    if (id === array.length - 1) {
      setId(0);
    } else {
      setId(id + 1);
    }
  };

  const array = [
    {
      image: pic1,
      name: "Sh. Ashok Kumar",
      position: "DGP UTTARAKHAND",
    },
    {
      image: pic2,
      name: "Sh. v. Murugesan",
      position: "ADG LO/ STF",
    },
    // {
    //   image: pic3,
    //   name: "Sh. senthil Avoodai Krishna Raj S",
    //   position: "I/C DIG P&M",
    // },
    {
      image: pic4,
      name: "Sh. Ajai Singh",
      position: "SSP STF",
    },
  ];
  return (
    <>
      <div className={style.speaker} id="speaker">
        <h2>KEYNOTE SPEAKERS</h2>
        <div className={style.speakers_image}>
          {array.map((speakerData, idx) => {
            return (
              <div key={idx + 78} className={style.speaker_img}>
                <img
                  alt={"Police"}
                  src={speakerData.image}
                  className={style.image_style}
                />
                <div className={style.speaker_box}>
                  <div className={style.speaker_content1}>
                    <p> {speakerData.name}</p>
                  </div>
                  <div className={style.speaker_content2}>
                    <p> {speakerData.position}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={style.mobileView}>
          <img src={left} alt="" onClick={handleLeft} />
          <div className={style.speaker_img}>
            <img
              alt={"Police"}
              src={array[id].image}
              className={style.image_style}
            />
            <div className={style.speaker_box}>
              <div className={style.speaker_content1}>
                <p> {array[id].name}</p>
              </div>
              <div className={style.speaker_content2}>
                <p> {array[id].position}</p>
              </div>
            </div>
          </div>
          <img src={right} alt="" onClick={handleRight} />
        </div>
        <div className={style.dots}>
          {array.map((data, idx) => {
            return (
              <div
                key={idx}
                className={`${idx === id ? style.selectedDot : ""} ${
                  style.dot
                }`}
              ></div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Speaker;
