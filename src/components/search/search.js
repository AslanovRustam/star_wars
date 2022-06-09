import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { fetchCategory, fetchData } from "../../api/getFetch";
import styles from "./search.module.css";
import Loading from "../../images/loadingBig2.gif";

export default function Search() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [dataforSearch, setDataforSearch] = useState([]);
  const [inputSearch, setInputSearch] = useState("");
  const [filteredData, setFilteredData] = useState({
    films: [],
    people: [],
    planets: [],
    species: [],
    starships: [],
    vehicles: [],
  });

  useEffect(() => {
    setLoading(true);
    fetchCategory().then((request) => {
      setList(request);
      setLoading(false);
    });
  }, []);

  function GetData(item, results) {
    fetchData(item[1]).then((request) => {
      results[item[0]].push(...request.results);
      if (request.next) {
        GetData([item[0], request.next], results);
      }
      setDataforSearch(results);
    });
  }

  useEffect(() => {
    const results = {
      films: [],
      people: [],
      planets: [],
      species: [],
      starships: [],
      vehicles: [],
    };
    Object.entries(list).map((item) => {
      GetData(item, results);
    });
  }, [list]);

  useEffect(() => {
    if (inputSearch === "") {
      setFilteredData({
        films: [],
        people: [],
        planets: [],
        species: [],
        starships: [],
        vehicles: [],
      });
      return;
    }
    for (let el in dataforSearch) {
      const filteredList = dataforSearch[el].filter((item) => {
        const title = (item.name || item.title).toLocaleLowerCase();
        const findText = inputSearch.toLocaleLowerCase();
        return title.indexOf(findText) >= 0;
      });
      setFilteredData((prevFilter) => ({ ...prevFilter, [el]: filteredList }));
    }
  }, [inputSearch]);

  function ItemUrl(item) {
    const splitef = item.url.split("/");
    const collection = splitef[4];
    const id = splitef[5];
    return `${collection}/${id}`;
  }

  // useEffect(() => {
  //   if (inputSearch === "") {
  //     setFilteredData([]);
  //     return;
  //   }
  //   const filteredList = dataforSearch.filter((item) => {
  //     const title = (item.name || item.title).toLocaleLowerCase();
  //     const findText = inputSearch.toLocaleLowerCase();
  //     return title.indexOf(findText) >= 0;
  //   });
  //   setFilteredData(filteredList);
  // }, [inputSearch]);
  // }

  return (
    <div className={styles.container}>
      <label className={styles.search}>
        <input
          className={styles.input}
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="find the way"
        ></input>
      </label>
      <ul className={styles.queryList}>
        {filteredData.films.map((item) => (
          <li key={item.name || item.title} className={styles.item}>
            {" "}
            <NavLink to={ItemUrl(item)} className={styles.queryItem}>{item.name || item.title} </NavLink>
          </li>
        ))}
        {filteredData.people.map((item, index) => (
          <li key={item.name || item.title}  className={styles.item}>
            {" "}
            <NavLink to={ItemUrl(item)} className={styles.queryItem}>{item.name || item.title} </NavLink>
          </li>
        ))}
        {filteredData.planets.map((item, index) => (
          <li key={item.name || item.title}  className={styles.item}>
            {" "}
            <NavLink to={ItemUrl(item)} className={styles.queryItem}>{item.name || item.title} </NavLink>
          </li>
        ))}
        {filteredData.species.map((item, index) => (
          <li key={item.name || item.title}  className={styles.item}>
            {" "}
            <NavLink to={ItemUrl(item)} className={styles.queryItem}>{item.name || item.title} </NavLink>
          </li>
        ))}
        {filteredData.starships.map((item, index) => (
          <li key={item.name || item.title}  className={styles.item}>
            {" "}
            <NavLink to={ItemUrl(item)} className={styles.queryItem}>{item.name || item.title} </NavLink>
          </li>
        ))}
        {filteredData.vehicles.map((item, index) => (
          <li key={item.name || item.title}  className={styles.item}>
            {" "}
            <NavLink to={ItemUrl(item)} className={styles.queryItem}>{item.name || item.title} </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

{
  /* {loading ? (
  <div className={styles.container}>
  <span>Loading...</span>
  <img className={styles.img} src={Loading} alt='Loading'></img>
</div>
) : (
  <section className={styles.container}>
  <h1 className={styles.item}>{params.collection}</h1>
  <Card list={list}/>
</section>
)} */
}
