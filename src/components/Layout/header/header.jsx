import React from "react";
import logo from "../../../assets/logo/logo3.png";
import styles from "../../../styles/Header.module.scss";
import Search from "./search";

export default function LayoutHeader() {
  return (
    <div className={styles.header}>
      <a href="https://taaghche.com/" target="blank" >
        <img src={logo}></img>
      </a>
      <Search />
    </div>
  );
}
