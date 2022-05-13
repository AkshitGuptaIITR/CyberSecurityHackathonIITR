import React from 'react';
import style from "./Timeline.module.css";
import pic1 from "../images/timeline.png";


const Timeline = () => {
    return (
        <>
            <div className={style.Timeline}>
                <h2>TIMELINE</h2>
                <img alt={"timeline"} src={pic1} style={{
                    width: "80%",
                    // height: "100vh",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto",
                    aspectRatio: "1.5/1"
                }} />
            </div>
        </>
    )
}

export default Timeline;