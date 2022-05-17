import React from 'react';
import style from "./Speaker.module.css";
import pic1 from "../../Assets/image 1462.jpg";
import pic2 from "../../Assets/image 1463.jpg";
import pic3 from "../../Assets/image 1464.jpg";
import pic4 from "../../Assets/image 1465.jpg";

const Speaker = () => {
    return (
        <>
            <div className={style.speaker}>
                <h2>KEYNOTE SPEAKERS</h2>
                <div className={style.speakers_image}>
                    <div className={style.speaker_img}>
                        <img alt={"Police"} src={pic1} className={style.image_style} />
                        <div className={style.speaker_box}>
                            <div className={style.speaker_content1}>
                                <p> Sh. Ashok Kumar</p>
                            </div>
                            <div className={style.speaker_content2}>
                                <p> DGP UTTARAKHAND</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.speaker_img}>
                        <img alt={"Police"} src={pic2} className={style.image_style} />
                        <div className={style.speaker_box}>
                            <div className={style.speaker_content1}>
                                <p> Sh. v. Murugesan</p>
                            </div>
                            <div className={style.speaker_content2}>
                                <p> IG STF/LO</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.speaker_img}>
                        <img alt={"Police"} src={pic3} className={style.image_style} />
                        <div className={style.speaker_box}>
                            <div className={style.speaker_content1}>
                                <p> Sh. senthil Avoodai Krishna Raj S</p>
                            </div>
                            <div className={style.speaker_content2}>
                                <p style={{
                                    marginTop: "4px"
                                }}> I/C DIG P&M</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.speaker_img}>
                        <img alt={"Police"} src={pic4} className={style.image_style} />
                        <div className={style.speaker_box}>
                            <div className={style.speaker_content1}>
                                <p> Sh. Ajai Singh</p>
                            </div>
                            <div className={style.speaker_content2}>
                                <p> SSP STF</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Speaker;