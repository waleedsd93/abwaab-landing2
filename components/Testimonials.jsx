import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/testimonials.module.css";
import { FaLinkedin, FaInstagram } from "react-icons/fa";
import rightArrow from "../assets/right-arrow.svg";
import leftArrow from "../assets/left-arrow.svg";
import { motion } from "framer-motion";

let testmons = [
  "التطبيق رائع ويحتوي على خدمة ضامن يتم حجز المبلغ الى حين استلام السلعه وبعدها يتم تحويل المبلغ لك",
  "برنامج جميل و سهل جدا🤩🤩🤩😍😍😍😍",
  "أنصح الزوار والعملاء الدخول اليه يوجد فيه جميع الخدمات المنزليه والبيع والشراء ومتطور بصراحه لايفوتكم هذا التطبيق تسوق بامان",
  "لا يوجد أي تعقيد سهل وسلس جدا",
  "تطبيق سلس وجميل في تسجيله واضافة الأعلانات ",
  "تطبيق سهل جدا ومفيد ، لقد قمت بالشراء والبيع من خلاله أنصح باستخدامه وبشدة"
]

const Testimonials = () => {
  const testiRef = useRef();
  const [translateValue, setTranslateValue] = useState(0);
  const [active, setActive] = useState(0);

  const moveRight = () => {
    if (translateValue >= 0) {
      setTranslateValue(-1 * (300 * (testiRef.current.children.length - 1)));
      setActive(testiRef.current.children.length - 1);
    } else {
      setTranslateValue((pre) => pre + 300);
      setActive((pre) => pre - 1);
    }
  };

  useEffect(() => {
    if (translateValue < 0) {
      testiRef.current.style.transform = `translateX(${-1 * translateValue}px)`;
    } else {
      testiRef.current.style.transform = `translateX(-${translateValue}px)`;
    }
  }, [translateValue]);

  useEffect(() => {
    if (active < 0 || active > testiRef.current.children.length - 1) return;
    Array.from(testiRef.current.children)[active].style.backgroundColor =
      "white";
  }, [active]);

  const moveLeft = () => {
    if (translateValue <= -1 * (300 * (testiRef.current.children.length - 1))) {
      setTranslateValue(0);
      setActive(0);
    } else {
      setTranslateValue((pre) => pre - 300);
      setActive((pre) => pre + 1);
    }
  };

  const TestiDiv = ({title}) => {
    return (
      <div className={styles.testiDiv}>
        <span>
          <FaInstagram />
        </span>
        <p>
          {title}
        </p>
      </div>
    );
  };

  return (
    <div id="اراء" className={styles.testi}>
      <div className={`${styles.testiContent} container`}>
        <img
          className={styles.rightArrow}
          onClick={moveRight}
          src={rightArrow.src}
        />
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          ref={testiRef}
        >
          {testmons.map((text, idx) => {
            return <TestiDiv key={`text-${idx}`} title={text}/>
          })}          
        </motion.div>
        <img
          className={styles.leftArrow}
          src={leftArrow.src}
          onClick={moveLeft}
        />
      </div>
    </div>
  );
};

export default Testimonials;
