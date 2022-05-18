import React from "react";
import style from "./Partner.module.css";
import pic1 from "../../Assets/image 1485.jpg";
import pic2 from "../../Assets/image 1486.jpg";



const Partner = () => {

    return (
        <>
            <div className={style.partner} id="partner">
                <h2>OFFICIAL KNOWLEDGE PARTNERS</h2>
                <div className={style.partner_image}>
                    <img alt={"Police"} src={pic1} className={style.image_style1} />
                    <img alt={"Police"} src={pic2} className={style.image_style2} />

                </div>
            </div>
        </>
    )
}

export default Partner;