import React from 'react';
import style from "./Timeline.module.css";
import pic1 from "../../Assets/TImeline Poster 1.jpg";


const Timeline = () => {
    return (
        <>
            <div className={style.Timeline} id="timeline">
                <h2>TIMELINE</h2>
                <img alt={"timeline"} src={pic1} className={style.image_style} />
            </div>
        </>
    )
}

export default Timeline;