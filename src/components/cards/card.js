import { useParams,useLocation,useNavigate  } from "react-router-dom";
import styles from "./card.module.css";

export default function Card({ list }) {
  let params = useParams();
  let cardsList = params.collection;
  let location = useLocation();
  console.log('loc',location);
  let navigate = useNavigate();
  let next = list.next
  console.log('next',next);

function goNext(){
    return(
        // console.log(Date.now());
        navigate({next}, { replace: true })
    )
}
  return (
    <div>
      <div className={styles.button}>
        <button type="button">BACK</button>
        <h2>Ther is a list of {cardsList}</h2>
        <button type="button" onClick={goNext}>FORWARD</button>{" "}
      </div>

      <ul>
        {list?.results?.map((item, index) => (
          <li key={index}>{item.title || item.name}</li>
        ))}
      </ul>
    </div>
  );
}
