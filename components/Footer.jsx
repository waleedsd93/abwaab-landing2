import React from "react";
import styles from "../styles/Footer.module.css";
import logo from "../assets/logo.svg";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsGoogle, BsTwitter } from "react-icons/bs";
import googlePlay from "../assets/google-play.png";
import playStore from "../assets/apple-store.png";
import huawei from "../assets/هواوي.svg";
const Footer = () => {
  return (
    <footer className={`${styles.footer} container`}>
      <img src={logo.src} />
      <p>
        منصة أبواب أحدث منصة للبيع والشراء (جديد ومستعمل) بطريقه امنه ومضمونه{" "}
      </p>
      <div>
        <button>
          <a href="https://play.google.com/store/apps/details?id=com.abwab.app" style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            تحميل للاندرويد
          <img src={googlePlay.src} />
          </a>
        </button>
        <button>
          <a href="https://apps.apple.com/sa/app/abwaab/id1618114185?uo=2" style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            تحميل للايفون
          <img src={playStore.src} />
          </a>
        </button>
        <button>
          <a href="https://appgallery.huawei.com/app/C106732501" style={{ textDecoration: 'none', color: 'whitesmoke'}}>
            تحميل هواوي
          <img src={huawei.src} />
          </a>
        </button>
      </div>
      <div>
        <a href="https://apps.apple.com/app/id1618114185?mt=8">
          <FaLinkedin />
        </a>
        <a href="https://instagram.com/abwaabsa">
          <FaInstagram />
        </a>
        <a href="https://twitter.com/abwaabsa">
          <BsTwitter />
        </a>
        <a href="https://play.google.com/store/apps/details?id=com.abwab.app&gl=TR">
          <BsGoogle />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
