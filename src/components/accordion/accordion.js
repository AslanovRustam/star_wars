import { useState } from "react";
import styles from "./accordion.module.css";

export default function Accordion({ item }) {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={() => setIsActive(!isActive)}>
        <div>{item.title || item.name}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {isActive && (
        <div className={styles.list}>
          <span className={styles.content} > Director : {item.director}</span>
          <span className={styles.content}>Producers : {item.producer}</span>
          <span className={styles.content}>Release date : {item.release_date}</span>
        </div >
      )}
    </div>
  );
}
