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
      <div style={{ fontWeight: 300, fontSize: 12 }} className={style.infoMobile}>
            <span style={{ marginRight: 6 }}>©</span>2022 DEVBHOOMI CYBER
            HACKATHON
          </div>
        <div className={style.images}>
          <img src={logo} alt="" />
          <img src={outreach} alt="" />
          <div>
            <img src={police} alt="" />
            <h1>UTTARARKHAND POLICE</h1>
          </div>
        </div>
        <div className={style.contact}>
          <h1>CONTACT US</h1>
          <p>For technical queries related to problem statements:</p>
          <div className={style.contactName}>
            <a href="tel: +917302774232">
              {" "}
              <img src={phone} alt="" /> +917302774232
            </a>
            <span>Mr. Kuldeep Tamta</span>
          </div>
          <div className={style.contactName}>
            <a href="tel: +918266082000">
              <img src={phone} alt="" /> +918266082000
            </a>
            <span>Mr. Sandesh Yadav</span>
          </div>
          <a
            href="mailto: devbhoomihackathon@gmail.com
"
            className={style.email}
          >
            <img src={email} style={{ marginRight: 12 }} alt="" />{" "}
            devbhoomihackathon@gmail.com
          </a>
          <div className={style.socailMedia}>
            <a href="">
              <img src={facebook} alt="" />
            </a>
            <a href="">
              <img src={linkedin} alt="" />
            </a>
            <a href="">
              <img src={instagram} alt="" />
            </a>
            <a href="">
              <img src={twitter} alt="" />
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
