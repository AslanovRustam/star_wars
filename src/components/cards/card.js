import { useParams,useLocation,useNavigate,useSearchParams,useMatch  } from "react-router-dom";
import { useState } from "react";
import Accordion from "../accordion/accordion";
import styles from "./card.module.css";

export default function Card({ list }) {
  let params = useParams();
  let cardsList = params.collection;
  let location = useLocation();
  console.log('loc',location);
  let navigate = useNavigate();
  let next = list.next
  console.log('next',next);
//  location.search = '/?page=2'
// let searchParams=useSearchParams();
// console.log('useSearchParams',searchParams);
// let match=useMatch();
// console.log('useMatch',match);
function goNext(){
    return(
        // console.log(Date.now());
        navigate({next}, { replace: true })
    )
}
  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonList}>
        <button className={styles.button} type="button">BACK</button>
        {/* <h2 className={styles.title}>Ther is a list of {cardsList}</h2> */}
        <button className={styles.button} type="button" onClick={goNext}>FORWARD</button>{" "}
      </div>

      <ul>
        {list?.results?.map((item, index) => (
          // <li key={index}>{item.title || item.name}</li>
          <li key={index}><Accordion item={item}/></li>
        ))}
      </ul>
    </div>
  );
}
