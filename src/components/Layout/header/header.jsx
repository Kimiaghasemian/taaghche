import React from "react";
import logo from "../../../assets/logo/logo3.png";
import styles from "../../../styles/Header.module.scss";

export default function LayoutHeader() {
  return (
    <div className={styles.header}>
      <img src={logo}></img>
    </div>
  );
}
