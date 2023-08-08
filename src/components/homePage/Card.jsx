import React from "react";
import styles from "../../styles/Card.module.scss";
import Image from "../../assets/logo/IMG_E4754.png";
import { ReactComponent as RateIcon } from "../../assets/icons/rate.svg";

export default function Card() {
  return (
    <div className={styles.card}>
      <img src={Image}></img>
      <p className={styles.title}>برادرزاده رامو</p>
      <p className={styles.writer}> دنی دیدرو</p>
      <p className={styles.writer}> 35000 ت</p>
      <p>
        <RateIcon /> 3.7
      </p>
    </div>
  );
}
