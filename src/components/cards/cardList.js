import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchList } from "../../api/getFetch";
import styles from "./card.module.css";
import Card from "./card";

export default function CardList() {
  let params = useParams();
  const [list, setList] = useState([]);
  let cardsList = params.collection;

  useEffect(() => {
    fetchList(cardsList).then((request) => setList(request));
  }, []);
  console.log("list", list);

  return (
    <section className={styles.container}>
      <h1 className={styles.item}>{params.collection}</h1>
      <Card list={list}/>
    </section>
  );
}
