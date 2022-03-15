import { useState } from "react";
import SingleItem from "../singleitem/singleitem";
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
          <span className={styles.content}>{item.opening_crawl}</span>
          <ul className={styles.contentList}><li className={styles.titleList}>Planets : </li>
          {item?.planets?.map(planet=><li key={planet} className={styles.accordionList}><SingleItem dataItem={planet}/></li>)}</ul>
          <ul className={styles.contentList}><li className={styles.titleList}>Characters : </li>
          {item?.characters?.map(character=><li key={character} className={styles.accordionList}><SingleItem dataItem={character}/></li>)}</ul>
        </div >
      )}
    </div>
  );
}
