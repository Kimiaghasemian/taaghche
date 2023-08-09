import React from "react";
import styles from "../../styles/Card.module.scss";
import { ReactComponent as RateIcon } from "../../assets/icons/rate.svg";

export default function Card({ book }) {
  return (
    <div className={styles.card}>
      <img src={book.coverUri}></img>
      <p className={styles.title}> {book.title}</p>
      <p className={styles.writer}>
        {`${book.authors[0].firstName} ${book.authors[0].lastName}`}
      </p>
      <p className={styles.writer}> {book.price} ت</p>
      <p>
        <RateIcon /> {book.rating.toFixed(1)}
      </p>
    </div>
  );
}
