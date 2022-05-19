import React, { useState } from "react";
import style from "./Jury.module.css";
import pic1 from "../../Assets/image 1466.jpg";
import pic2 from "../../Assets/image 1464.jpg";
import pic3 from "../../Assets/image 1467.jpg";
import pic4 from "../../Assets/image 1465.jpg";
import left from "../../Assets/left.png";
import right from "../../Assets/right.png";
import pic5 from "../../Assets/img9.jpeg";
import pic6 from "../../Assets/img10.jpeg";
import cpic2 from "../../Assets/image 1463.jpg";
import cpic1 from "../../Assets/img11.jpeg";
import cpic3 from "../../Assets/img12.jpeg";
import cpic4 from "../../Assets/img13.jpeg";

const Jury = () => {
  const [id, setId] = useState(0);
  const [idc, setIdc] = useState(0);

  const handleLeft = () => {
    if (id === 0) {
      setId(array.length - 1);
    } else {
      setId(id - 1);
    }
  };

  const handleLeftC = () => {
    if (idc === 0) {
      setIdc(array.length - 1);
    } else {
      setIdc(idc - 1);
    }
  };

  const handleRight = () => {
    if (id === array.length - 1) {
      setId(0);
    } else {
      setId(id + 1);
    }
  };

  const handleRightC = () => {
    if (idc === array.length - 1) {
      setIdc(0);
    } else {
      setIdc(idc + 1);
    }
  };

  const array = [
    {
      image: pic1,
      name: "Sh. Amit Kumar Sinha",
      position: "ADG",
    },
    {
      image: pic2,
      name: "Sh. Senthil Avoodai Krishna Raj S",
      position: "DIG STF/P&M",
    },
    {
      image: pic3,
      name: "Smt. Nivedita Kukreti Kumar",
      position: "DIG Intelligence",
    },
    // {
    //   image: pic6,
    //   name: "Sh. Vivek singh kutiyal",
    //   position: "DySP STF",
    // },
    {
      image: pic5,
      name: "Smt. Anusha badola",
      position: "DySP vigilance",
    }    
  ];

  const arrayCommunity = [
    {
      image: cpic2,
      name: "Sh. v. Murugesan",
      position: "ADG LO/ STF",
    },
    {
      image: pic4,
      name: "Sh. Ajai Singh",
      position: "SSP STF",
    },
    {
      image: cpic1,
      name: "Sh. Swapn Kishore Singh",
      position: "SP STF",
    },
    {
      image: cpic3,
      name: "Sh. Ankush Mishra",
      position: "SP STF/Cyber",
    },
    {
      image: cpic4,
      name: "Sh. Sumit Pandey",
      position: "DySP Pithoragarh",
    },
    {
      image: pic6,
      name: "Sh. Vivek singh kutiyal",
      position: "DySP STF",
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
        <div className={style.mobileView}>
          x
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
        <h2>ORGANISING COMMITTEE</h2>
        <div className={style.jury_images}>
          {arrayCommunity.map((juryData, idx) => {
            return (
              <div key={idx + 80} className={style.jury_img}>
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
        <div className={style.mobileView}>
          x
          <img src={left} alt="" onClick={handleLeftC} />
          <div className={style.speaker_img}>
            <img
              alt={"Police"}
              src={array[idc].image}
              className={style.image_style}
            />
            <div className={style.speaker_box}>
              <div className={style.speaker_content1}>
                <p> {array[idc].name}</p>
              </div>
              <div className={style.speaker_content2}>
                <p> {array[idc].position}</p>
              </div>
            </div>
          </div>
          <img src={right} alt="" onClick={handleRightC} />
        </div>
        <div className={style.dots}>
          {arrayCommunity.map((data, idx) => {
            return (
              <div
                key={idx}
                className={`${idx === idc ? style.selectedDot : ""} ${
                  style.dot
                }`}
              ></div>
            );
          })}
        </div>
        {/* <p>Will be updated soon!</p> */}
        {/* <img
          alt={"committee"}
          src={pic4}
          style={{
            width: "100%",
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            aspectRatio: "2/1",
          }}
        /> */}
      </div>
    </>
  );
};

export default Jury;
