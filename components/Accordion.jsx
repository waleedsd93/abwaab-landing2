import React, { useState, useRef, useEffect } from "react";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import styles from "../styles/accordion.module.css";

const Accordion = ({ title, text }) => {
  const [accordionActive, setAccordionActive] = useState(false);
  const [dataHeight, setDataHeight] = useState(0);
  const textRef = useRef();
  useEffect(() => {
    if (accordionActive) {
      setDataHeight(textRef.current.scrollHeight + 30);
    } else {
      setDataHeight(0);
    }
  }, [accordionActive]);

  useEffect(() => {
    textRef.current.style.height = `${dataHeight}px`;
    // textRef.current.style.height = `${dataHeight}px`;
  }, [dataHeight]);
  return (
    <div
      className={
        accordionActive
          ? `${styles.accordion} ${styles.active}`
          : `${styles.accordion} ${styles.close}`
      }
      onClick={() => setAccordionActive((pre) => !pre)}
    >
      <div className={styles.accordionTitle}>
        <p>{title}</p>
        {!accordionActive ? <AiFillPlusCircle /> : <AiFillMinusCircle />}
      </div>
      <div ref={textRef}>{text}</div>
    </div>
  );
};

export default Accordion;
