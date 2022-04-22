import { NavLink } from "react-router-dom";
import { useState} from "react";
import { fetchDataPages } from "../../api/getFetch";
import Accordion from "../accordion/accordion";
import Loading from "../../images/loadingBig2.gif";
import styles from "./card.module.css";

export default function Card({ list }) {
  const [data, setData] = useState(list);
  const [loading, setLoading] = useState(false);

  function goNext() {
    return (
      setLoading(true),
      fetchDataPages(data.next).then((request) => {
        setData(request);
        setLoading(false);
      })
    );
  }
  function goPrevious() {
    return (
      setLoading(true),
      fetchDataPages(data.previous).then((request) => {
        setData(request);
        setLoading(false);
      })
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.buttonList}>
        {data?.previous && (
          <button className={styles.button} type="button" onClick={goPrevious}>
            Previous
          </button>
        )}
        {data?.next && (
          <button className={styles.button} type="button" onClick={goNext}>
            NEXT
          </button>
        )}
      </div>
      {loading ? (
        <div className={styles.container}>
          <span>Loading...</span>
          <img className={styles.img} src={Loading} alt='Loading'></img>
        </div>
      ) : (
        <ul>
          {data?.results?.map((item, index) => (
            <li key={index}>
              <Accordion item={item} />
            </li>
          ))}
        </ul>
      )}
      <NavLink to="/" className={styles.button}>
        {" "}
        Back
      </NavLink>
    </div>
  );
}
