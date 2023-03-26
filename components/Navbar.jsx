import React, { useState } from "react";
import styles from "../styles/nav.module.css";
import logo from "../assets/logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
const Navbar = () => {
  const [navActive, setNavActive] = useState(false);
  const openCloseNav = () => {
    setNavActive((prev) => !prev);
  };
  return (
    <div className={`${styles.navDiv} container`}>
      <img src={logo.src} />
      <div className={styles.navLinks}>
        <a href="#home">أبواب</a>
        <a href="#مميزاتنا">مميزاتنا</a>
        <a href="#تواصل معنا ">تواصل معنا </a>
        <a href="#المكافأت">مكافئتك</a>
        <a href="#اراء">أراء مستخدمينا</a>
      </div>
      {navActive ? (
        <AiOutlineClose onClick={openCloseNav} />
      ) : (
        <GiHamburgerMenu onClick={openCloseNav} />
      )}
      <div
        className={`${styles.mobileLinks} ${
          navActive ? styles.mobileNavActive : styles.mobileNavClose
        }`}
      >
        <a href="#home" onClick={openCloseNav}>
          أبواب
        </a>
        <a href="#مميزاتنا" onClick={openCloseNav}>
          مميزاتنا
        </a>
        <a href="#تواصل معنا" onClick={openCloseNav}>
          تواصل معنا{" "}
        </a>
        <a href="#المكافأت" onClick={openCloseNav}>
          مكافئتك
        </a>
        <a href="#اراء" onClick={openCloseNav}>
          أراء مستخدمينا
        </a>
      </div>
    </div>
  );
};

export default Navbar;
