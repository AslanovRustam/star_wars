import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchData } from "../../api/getFetch";
import styles from "./descripion.module.css";
// import Card from "./card";

export default function Description() {
  let params = useParams();
  const [data, setData] = useState([]);
  let id = params.id;

//   useEffect(() => {
//     fetchData(cardsList).then((request) => setList(request));
//   }, []);
  console.log("data in description", data);
  console.log("id", id);


  return (
    <section className={styles.container}>
      <h1 className={styles.item}>aaaaa</h1>
    </section>
  );
}
