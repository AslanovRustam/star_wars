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
    setLoading(true);
    fetchData(item[1]).then((request) => {
      results[item[0]].push(...request.results);
      if (request.next) {
        GetData([item[0], request.next], results);
      }
      setDataforSearch(results);
    });
    setLoading(false)
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

  return (
    <>
    {loading ? (<div>Loading data...</div>):(
    <div className={styles.container} >
      <label className={styles.search}>
        <input
          className={styles.input}
          value={inputSearch}
          onChange={(e) => setInputSearch(e.target.value)}
          placeholder="find the way"
        ></input>
      </label>
        <div className={styles.queryList}>
        {filteredData.films.length > 0 ? (
          <>
            FILMS:
            {filteredData.films.map((item) => (
              <div key={item.name || item.title} className={styles.item}>
                <NavLink to={ItemUrl(item)} className={styles.queryItem}>
                  {item.name || item.title}{" "}
                </NavLink>
              </div>
            ))}
          </>
        ) : ("")}
        {filteredData.people.length > 0 ? (
          <>
            PEOPLE
            {filteredData.people.map((item, index) => (
              <div key={item.name || item.title} className={styles.item}>
                <NavLink to={ItemUrl(item)} className={styles.queryItem}>
                  {item.name || item.title}{" "}
                </NavLink>
              </div>
            ))}
          </>
        ) : ("")}
        {filteredData.planets.length > 0 ? (
          <>
            PLANETS:
            {filteredData.planets.map((item, index) => (
              <div key={item.name || item.title} className={styles.item}>
                <NavLink to={ItemUrl(item)} className={styles.queryItem}>
                  {item.name || item.title}{" "}
                </NavLink>
              </div>
            ))}
          </>
        ) : ( "" )}
        {filteredData.species.length > 0 ? (
          <>
            SPECIES:
            {filteredData.species.map((item, index) => (
              <div key={item.name || item.title} className={styles.item}>
                <NavLink to={ItemUrl(item)} className={styles.queryItem}>
                  {item.name || item.title}{" "}
                </NavLink>
              </div>
            ))}
          </>
        ) : ( "" )}
        {filteredData.starships.length > 0 ? (
          <>
            STARSHIPS:
            {filteredData.starships.map((item, index) => (
              <div key={item.name || item.title} className={styles.item}>
                <NavLink to={ItemUrl(item)} className={styles.queryItem}>
                  {item.name || item.title}{" "}
                </NavLink>
              </div>
            ))}
          </>
        ) : ( "" )}
        {filteredData.vehicles.length > 0 ? (
          <>
            VEHICLES:
            {filteredData.vehicles.map((item, index) => (
              <div key={item.name || item.title} className={styles.item}>
                <NavLink to={ItemUrl(item)} className={styles.queryItem}>
                  {item.name || item.title}{" "}
                </NavLink>
              </div>
            ))}
          </>
        ) : ( "" )}
      </div>     
    </div>
    )}
    </>
  );
}




