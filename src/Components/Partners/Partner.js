import React from "react";
import style from "./Partner.module.css";
import pic1 from "../images/sys.jpg";
import pic2 from "../images/IBM.png";
import pic3 from "../images/aws.jpg";
import pic4 from "../images/vcl.png";
import pic5 from "../images/vn.png";
import pic6 from "../images/edualgo.png";
import pic7 from "../images/reski.png";
import pic8 from "../images/successtales.jpg";
import pic9 from "../images/koders.png";
import pic10 from "../images/jetbrains.png";


const Partner = () => {
    const image_style2 = {
        width: "200px",
        height: "160px",
        margin: "auto",
        paddingBottom: "30px",
        objectFit: "cover",
        objectPosition: "right"
    }
    const image_style1 = {
        width: "200px",
        height: "130px",
        margin: "auto",
        paddingBottom: "30px",
        objectFit: "cover",
        objectPosition: "right"
    }
    const image_style3 = {
        width: "220px",
        height: "250px",
        margin: "auto",
        paddingBottom: "30px",
        objectFit: "cover",
        objectPosition: "right"
    }
    return (
        <>
            <div className={style.partner}>
                <h2>OFFICIAL KNOWLEDGE PARTNERS</h2>
                <div className={style.partner_image}>
                    <img alt={"Police"} src={pic1} style={image_style1} className={`${style.pic1} ${style.image}`} />
                    <img alt={"Police"} src={pic2} style={image_style2} className={`${style.pic2} ${style.image}`} />
                    <img alt={"Police"} src={pic3} style={image_style2} className={`${style.pic3} ${style.image}`} />
                    <img alt={"Police"} src={pic4} style={image_style2} className={`${style.pic4} ${style.image}`} />
                    <img alt={"Police"} src={pic5} style={image_style2} className={`${style.pic5} ${style.image}`} />
                    <img alt={"Police"} src={pic6} style={image_style1} className={`${style.pic6} ${style.image}`} />
                    <img alt={"Police"} src={pic7} style={image_style1} className={`${style.pic7} ${style.image}`} />
                    <img alt={"Police"} src={pic8} style={image_style3} className={`${style.pic8} ${style.image}`} />
                    <img alt={"Police"} src={pic9} style={image_style1} className={`${style.pic9} ${style.image}`} />
                    <img alt={"Police"} src={pic10} style={image_style3} className={`${style.pic10} ${style.image}`} />
                </div>
            </div>
        </>
    )
}

export default Partner;