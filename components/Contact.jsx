import React, { useRef } from "react";
import styles from "../styles/contact.module.css";

const Contact = () => {
  const inputRef = useRef();

  return (
    <div id="تواصل معنا" className={`${styles.contactDiv} `}>
      <div className={`${styles.contactDivContent} container`}>
        <span>رقم الهاتف</span>
        <h3 className="title">منت بخسران ! سجل و صير منا و فينا </h3>
        <div className={styles.contactDivInput}>
          <button>ارسال</button>
          <input
            ref={inputRef}
            maxLength="12"
            onChange={(e) => {
              if (isNaN(e.target.value)) {
                e.target.value = e.target.value.slice(0, -1);
              }
            }}
            type="text"
          />
          <p>+966</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
