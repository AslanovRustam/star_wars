import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchData } from "../../api/getFetch";
import styles from "./singleitem.module.css";
import Loading from "../../images/loading.gif";

export default function SingleItem({ dataItem }) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchData(`${dataItem}`).then((request) => {
      setData(request);
      setLoading(false);
    });
  }, []);

  // let idFromUrl = parseInt(dataItem.replace(/[^\d]/g, ""));
  const splitef = dataItem.split("/");
  const collection = splitef[4];
  const id = splitef[5];
  // console.log("dataItem", dataItem);
  // console.log("data", data);


  return (
    <>
      {loading ? (
        <>
          <img className={styles.img} src={Loading} alt='Loading'></img>
        </>
      ) : (
        <NavLink to={`/${collection}/${id}`} className={styles.content}>
          {data.title || data.name}
        </NavLink>
      )}
    </>
  );
}
