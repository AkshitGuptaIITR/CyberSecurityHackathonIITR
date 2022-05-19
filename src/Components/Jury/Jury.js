import React, { useState } from "react";
import style from "./Jury.module.css";
import pic1 from "../../Assets/image 1466.jpg";
import pic2 from "../../Assets/image 1464.jpg";
import pic3 from "../../Assets/image 1467.jpg";
import pic4 from "../images/oc.png";
import left from "../../Assets/left.png";
import right from "../../Assets/right.png";

const Jury = () => {
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
      name: "Sh. Amit Kumar Sinha",
      position: "IG Telecom/ P&M/ Dir. Vigilance",
    },
    {
      image: pic2,
      name: "Sh. senthil Avoodai Krishna Raj S",
      position: "I/C DIG P&M",
    },
    {
      image: pic3,
      name: "Smt. Nivedita Kukreti Kumar",
      position: "SSP Inteligence",
    },
  ];

  return (
    <>
      <div className={style.Jury} id="jury">
        <h2>DISTINGUISHED JURY</h2>
        <div className={style.jury_images}>
          {array.map((juryData, idx) => {
            return (
              <div key={juryData.name} className={style.jury_img}>
                <img
                  alt={"Police"}
                  src={juryData.image}
                  className={style.image_style}
                />
                <div className={style.speaker_box}>
                  <div className={style.speaker_content1}>
                    <p>{juryData.name}</p>
                  </div>
                  <div className={style.speaker_content2}>
                    <p>{juryData.position}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className={style.mobileView}>x
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
                className={`${idx === id ? style.selectedDot : ""} ${style.dot
                  }`}
              ></div>
            );
          })}
        </div>
        <h2>ORGANISING COMMITTEE</h2>
        <img
          alt={"committee"}
          src={pic4}
          style={{
            width: "100%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            aspectRatio: "2/1",
          }}
        />
      </div>
    </>
  );
};

export default Jury;
