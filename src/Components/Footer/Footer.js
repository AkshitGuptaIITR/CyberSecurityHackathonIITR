import React from "react";
import style from "./Footer.module.css";
import logo from "../../Assets/iitrlogo.png";
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter, AiOutlineInstagram } from "react-icons/ai";
import { RiLinkedinFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <div className={style.upperBlock}>
        <img src={logo} alt="" />
        <div className={style.contact}>
          <h1>CONTACT US</h1>
          <a href="mailto: devbhoomihackathon@gmail.com">
            devbhoomihackathon@gmail.com
          </a>
          <p>For technical queries related to problem statements:</p>
          <div className={style.contactName}>
            <span>Mr. Kuldeep Tamta</span>
            <a href="tel: +917302774232">+917302774232</a>
          </div>
          <div className={style.contactName}>
            <span>Mr. Sandesh Yadav</span>
            <a href="tel: +918266082000">+918266082000</a>
          </div>
          <div className={style.socailMedia}>
            <a href="">
              <FaFacebookF />
            </a>
            <a href="">
              <AiOutlineTwitter />
            </a>
            <a href="">
              <AiOutlineInstagram />
            </a>
            <a href="">
              <RiLinkedinFill />
            </a>
          </div>
        </div>
      </div>
        <div className={style.line}></div>
    </footer>
  );
};

export default Footer;
