import React from "react";
import style from "./Jury.module.css";
import pic1 from "../../Assets/image 1466.jpg";
import pic2 from "../../Assets/image 1464.jpg";
import pic3 from "../../Assets/image 1467.jpg";
import pic4 from "../images/oc.png";

const Jury = () => {
  return (
    <>
      <div className={style.Jury} id="jury">
        <h2>DISTINGUISHED JURY</h2>
        <div className={style.jury_images}>
          <div className={style.jury_img}>
            <img alt={"Police"} src={pic1} className={style.image_style} />
            <div className={style.speaker_box}>
              <div className={style.speaker_content1}>
                <p> Sh. Amit Kumar Sinha</p>
              </div>
              <div className={style.speaker_content2}>
                <p> IG Telecom/ P&M/ Dir. Vigilance</p>
              </div>
            </div>
          </div>
          <div className={style.jury_img}>
            <img alt={"Police"} src={pic2} className={style.image_style} />
            <div className={style.speaker_box}>
              <div className={style.speaker_content1}>
                <p> Sh. senthil Avoodai Krishna Raj S</p>
              </div>
              <div className={style.speaker_content2}>
                <p> I/C DIG P&M</p>
              </div>
            </div>
          </div>
          <div className={style.jury_img}>
            <img alt={"Police"} src={pic3} className={style.image_style} />
            <div className={style.speaker_box}>
              <div className={style.speaker_content1}>
                <p> Smt. Nivedita Kukreti Kumar</p>
              </div>
              <div className={style.speaker_content2}>
                <p> SSP Inteligence</p>
              </div>
            </div>
          </div>

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
