/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import style from "./Footer.module.css";
import logo from "../../Assets/iitrlogo.png";
import outreach from "../../Assets/outreach.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";
import police from "../../Assets/policeLogo.png";
import phone from "../../Assets/phone.png";
import email from "../../Assets/email.png";
import facebook from "../../Assets/facebook.png";
import instagram from "../../Assets/instagram.png";
import linkedin from "../../Assets/linkedin.png";
import twitter from "../../Assets/twitter.png";

const Footer = () => {
  return (
    <footer className={style.footer} id="contact">
      <div className={style.upperBlock}>
        <div
          style={{ fontWeight: 300, fontSize: 12 }}
          className={style.infoMobile}
        >
          <span style={{ marginRight: 6 }}>©</span>2022 DEVBHOOMI CYBER
          HACKATHON
        </div>
        <div className={style.images}>
          <img
            src={logo}
            alt="IITR"
            onClick={() => window.open("https://www.iitr.ac.in/")}
          />
          <img
            src={outreach}
            alt="Outreach"
            onClick={() => window.open("https://outreach.iitr.ac.in/")}
          />
          <div
            onClick={() => window.open(" https://uttarakhandpolice.uk.gov.in/")}
          >
            <img src={police} alt="" style={{ height: 100 }} />
            <h1>UTTARARKHAND POLICE</h1>
          </div>
        </div>
        <div className={style.contact}>
          <h1>CONTACT US</h1>
          <p>For technical queries related to problem statements:</p>
          <div className={style.contactName}>
            <a href="tel: +919458947333">
              {" "}
              <img src={phone} alt="" /> +91 94589 47333
            </a>
            <span>Mr. Sateesh Kumar Peddoju</span>
          </div>
          <div className={style.contactName}>
            <a href="tel: +919411176136">
              <img src={phone} alt="" /> +91 94111 76136
            </a>
            <span>Mr. Akshay Dvivedi</span>
          </div>
          <a
            href="mailto: dch2022@iitr.ac.in"
            className={style.email}
          >
            <img src={email} style={{ marginRight: 12 }} alt="" />{" "}
            dch2022@iitr.ac.in
          </a>
          <div className={style.socailMedia}>
            <a href="">
              <img src={facebook} alt="" onClick={() => window.open('https://www.facebook.com/iitroorkee.media')} />
            </a>
            <a href="">
              <img src={linkedin} alt="" onClick={() => window.open('https://www.linkedin.com/school/157269/admin/')} />
            </a>
            <a href="">
              <img src={instagram} alt="" onClick={() => window.open('https://www.instagram.com/iitroorkee/?hl=en')} />
            </a>
            <a href="">
              <img src={twitter} alt="" onClick={() => window.open('https://twitter.com/iitroorkee')} />
            </a>
          </div>
          <div style={{ fontWeight: 300, fontSize: 12 }} className={style.info}>
            <span style={{ marginRight: 6 }}>©</span>2022 DEVBHOOMI CYBER
            HACKATHON
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
