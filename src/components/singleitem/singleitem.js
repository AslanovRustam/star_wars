import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchData } from "../../api/getFetch";
import styles from "./singleitem.module.css";

export default function SingleItem({ dataItem }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData(`${dataItem}`).then((request) => setData(request));
  }, []);

  return (
      <a className={styles.content} href={dataItem}>
        {data.title || data.name}
    </a>
  );
}
