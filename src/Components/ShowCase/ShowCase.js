import React from 'react';
import style from "./ShowCase.module.css";
import { BsCalendar3 } from "react-icons/bs";

const ShowCase = () => {
    return (
        <>
            <div className={style.showcase} >
                <div className={style.showcase_cont}>
                    <h1>DEVBHOOMI CYBER  HACKATHON</h1>
                    <p style={{
                        fontSize: "2rem"
                    }}>
                        <BsCalendar3 size={24} className={style.Icon} /> 10-12 Nov, 2021
                    </p>
                </div>

            </div>

        </>
    )
}
export default ShowCase;