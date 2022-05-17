import React from 'react';
import style from "./Event.module.css";
import pic1 from "../../Assets/image 1474.jpg";

const Event = () => {
    return (
        <>
            <div className={style.Event} id="schedule">
                <h2>EVENT SCHEDULE (FINALE)</h2>
                <img alt={"timeline"} src={pic1} style={{
                    width: "85%",
                    height: "150vh",
                    display: "block",
                    marginLeft: "auto",
                    marginRight: "auto"
                }} />
            </div>
        </>
    );
}

export default Event;