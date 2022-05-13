import React from 'react';
import style from "./Jury.module.css";
import pic1 from "../images/Amitsir.png";
import pic2 from "../images/ridihimamam.png";
import pic3 from "../images/niveditamam.png";
import pic4 from "../images/oc.png";

const Jury = () => {
    const image_style = {
        margin: "auto",
        paddingBottom: "30px",
        width: "200px",
        height: "250px"
    };
    return (
        <>
            <div className={style.Jury} id="jury">
                <h2>DISTINGUISHED JURY</h2>
                <div className={style.jury_image}>
                    <img alt={"Police"} src={pic1} style={image_style} />
                    <img alt={"Police"} src={pic2} style={image_style} />
                    <img alt={"Police"} src={pic3} style={image_style} />
                </div>
                <h2>ORGANISING COMMITTEE</h2>
                <img alt={"committee"} src={pic4} style={{
                    width: "90%",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    aspectRatio: '2/1'
                }} />
            </div>
        </>
    )
}

export default Jury;