import { useParams,useLocation,useNavigate,useSearchParams,useMatch  } from "react-router-dom";
import { useState } from "react";
import Accordion from "../accordion/accordion";
import styles from "./card.module.css";

export default function Card({ list }) {
  // let params = useParams();
  // let location = useLocation();
  // // console.log('loc',location);
  let navigate = useNavigate();
  let next = list.next
  console.log('next',next);
function goNext(){
    return(
        navigate({next}, { replace: true })
    )
}
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonList}>
        {list?.previous &&<button className={styles.button} type="button">BACK</button>}
        {list?.next &&<button className={styles.button} type="button" onClick={goNext}>NEXT</button>}
      </div>

      <ul>
        {list?.results?.map((item, index) => (
          <li key={index}><Accordion item={item}/></li>
        ))}
      </ul>
    </div>
  );
}
