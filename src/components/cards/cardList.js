import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchList } from "../../api/getFetch";
import styles from "./card.module.css";
import Card from "./card";
import Loading from "../../images/loadingBig2.gif";


export default function CardList() {
  let params = useParams();
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);

  let cardsList = params.collection;

  useEffect(() => {
    setLoading(true);
    fetchList(cardsList).then((request) => {
      setList(request);
      setLoading(false)
    });
  }, []);
  // console.log("list", list);

  return (
    <>
    {loading ? (
      <div className={styles.container}>
      <span>Loading...</span>
      <img className={styles.img} src={Loading}></img>
</div>
    ) : (
      <section className={styles.container}>
      <h1 className={styles.item}>{params.collection}</h1>
      <Card list={list}/>
    </section>
    )}
 </>
  );
}
