import React from 'react';
import style from "./Speaker.module.css";
import pic1 from "../images/ashokSIr.png";
import pic2 from "../images/murugesansir.png";
import pic3 from "../images/krishnaraj.png";
import pic4 from "../images/AjaiSir.png";

const Speaker = () => {
    const image_style = {
        margin: "auto",
        paddingBottom: "30px",
        width: "200px",
        height: "250px"
    };
    return (
        <>
            <div className={style.speaker} id="speaker">
                <h2>KEYNOTE SPEAKERS</h2>
                <div className={style.speaker_image}>
                    <img alt={"Police"} src={pic1} style={image_style} className={style.pic1} />
                    <img alt={"Police"} src={pic2} style={image_style} className={style.pic2} />
                    <img alt={"Police"} src={pic3} style={image_style} className={style.pic3} />
                    <img alt={"Police"} src={pic4} style={image_style} className={style.pic4} />
                </div>
            </div>
        </>
    )
}

export default Speaker;