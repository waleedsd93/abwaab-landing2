import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/info.module.css";
import { motion } from "framer-motion";
const Info = () => {
  const PlusSign = () => {
    return (
      <svg
        width="14"
        height="13"
        viewBox="0 0 14 13"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M8.23438 8.17188V13H5.15234V8.17188H0.347656V5.11328H5.15234V0.308594H8.23438V5.11328H13.0391V8.17188H8.23438Z"
          fill="#00A86E"
        />
      </svg>
    );
  };

  const [firstNumber, setFirstNumber] = useState(0);
  const [secondNumber, setSecondNumber] = useState(0);
  const [thirdNumber, setThirdNumber] = useState(0);
  const [isVisable, setIsVisable] = useState(false);
  const infoRef = useRef();
  useEffect(() => {
  // set isvisable to true when the component is in the viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisable(true);
        }
      }
    );
    observer.observe(infoRef.current);
    return () => {
      observer.unobserve(infoRef.current);
    }
    
  }, []);

  useEffect(() => {
    if (isVisable) {
      const interval1 = setInterval(() => {
        if (firstNumber >= 51) {
          clearInterval(interval1);
          return;
        }
        setFirstNumber((pre) => pre + 1);
      }, 40);
      const interval2 = setInterval(() => {
        if (secondNumber >= 56) {
          clearInterval(interval2);
          return;
        }
        setSecondNumber((pre) => pre + 1);
      }, 40);
      const interval3 = setInterval(() => {
        if (thirdNumber >= 91) {
          clearInterval(interval3);
          return;
        }
        setThirdNumber((pre) => pre + 1);
      }, 40);
      return () => {
        clearInterval(interval1);
        clearInterval(interval2);
        clearInterval(interval3);
      };
    }
  }, [firstNumber, secondNumber, thirdNumber, isVisable]);

 
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      ref={infoRef}
      className={`${styles.info} container`}
    >
      <div>
        <div>
          <PlusSign />
          <h2>{firstNumber}K</h2>
        </div>
        <div>
          <p>عدد عمليات البيع و الشراء</p>
        </div>
      </div>
      <div className={styles.line}></div>
      <div>
        <div>
          <PlusSign />
          <h2> {secondNumber}K</h2>
        </div>
        <div>
          <p> عدد الاعلانات </p>
        </div>
      </div>
      <div className={styles.line}></div>
      <div>
        <div>
          <PlusSign />
          <h2>{thirdNumber}K</h2>
        </div>
        <div>
          <p> عدد مرات التحميل </p>
        </div>
      </div>
    </motion.div>
  );
};

export default Info;
