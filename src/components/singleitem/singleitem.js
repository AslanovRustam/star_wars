import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchData } from "../../api/getFetch";
import styles from "./singleitem.module.css";
import Description from "../description/description";
import Loading from "../../images/loading.gif";


import { useParams } from "react-router-dom";

export default function SingleItem({ dataItem }) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const params = useParams();
  console.log("dataItem", dataItem);
  console.log("params", params);

  useEffect(() => {
    setLoading(true);
    fetchData(`${dataItem}`).then(
      (request) => {
        setData(request);
      setLoading(false)
      }
    );
  }, []);

  let idFromUrl = parseInt(dataItem.replace(/[^\d]/g, ""));
  console.log("idFromUrl", idFromUrl);

  return (
    <>
      {loading ? (
        <>
        {/* <div className={styles.loading}>loading...</div> */}
        <img className={styles.img} src={Loading}></img>
</>
      ) : (
        <NavLink
          to={`/${params.collection}/${idFromUrl}`}
          className={styles.content}
        >
          {data.title || data.name}
        </NavLink>
      )}
    </>
  );
}
