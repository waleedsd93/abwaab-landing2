import React, { useEffect, useRef, useState } from "react";
import styles from "../styles/section.module.css";
import googlePlay from "../assets/google-play.png";
import playStore from "../assets/apple-store.png";
import huawei from "../assets/هواوي.svg";
import markImg from "../assets/mark.png";
import { motion } from "framer-motion";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
const Section = ({
  img = "https://img.freepik.com/free-photo/wide-angle-shot-single-tree-growing-clouded-sky-during-sunset-surrounded-by-grass_181624-22807.jpg?w=900&t=st=1678795297~exp=1678795897~hmac=6d53e5bd7cc0d1e7412277dcd836801263ef4f2504c4d9b0783c23939bece9e1",
  title,
  text,
  reverse,
  subtitle = "",
  mark = false,
  specialWord,
  icons = false,
  columnReverse,
  dots,
  id,
  video,
}) => {
  const videoRef = useRef();
  const [rendered, setRendered] = useState(false);
  const [played, setPlayed] = useState(false);
  const playPause = () => {
    setPlayed((pre) => !pre);
  };
  useEffect(() => {
    if (rendered) {
      if (played) {
        videoRef?.current?.play();
      } else {
        videoRef?.current?.pause();
      }
    } else {
      setRendered(true);
    }
  }, [played]);

  return (
    <motion.div
      id={id}
      initial={{ y: -100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      className={`${styles.section} container ${reverse && styles.reverse} ${
        columnReverse && styles.columnReverse
      } ${mark && styles.markImg}`}
      style={specialWord && { marginBlock: "30px", marginBottom: "100px" }}
    >
      {video ? (
        <div>
          <video
            onEnded={playPause}
            src={"/video.mp4"}
            ref={videoRef}
            className={styles.sectionVideo}
          ></video>
          {played ? (
            <BsPauseFill onClick={playPause} />
          ) : (
            <BsPlayFill onClick={playPause} />
          )}
        </div>
      ) : (
        <img src={img} />
      )}
      <div>
        <div className={styles.markDiv}>
          {mark && <img src={markImg.src} />}
        </div>
        <div>
          <span>{subtitle}</span>
          <h3>
            {title}
            <span style={{ color: "var(--orange-color)" }}>{specialWord}</span>
          </h3>
          <p>{text}</p>
          {icons && (
            <div >
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
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Section;
