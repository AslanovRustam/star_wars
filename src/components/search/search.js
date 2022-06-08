import { useState, useEffect } from "react";
import { useParams, NavLink } from "react-router-dom";
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
  // console.log("list", list);

  // function GetData(url, results) {
  //   fetchData(url).then((request) => {
  //     results.push(...request.results);
  //     if (request.next) {
  //       GetData(request.next, results);
  // console.log("results", results);

  //     }
  //     setDataforSearch(results);
  //   });
  // }
  function GetData(item, results) {
    fetchData(item[1]).then((request) => {
      results[item[0]].push(...request.results);
      if (request.next) {
        GetData([item[0], request.next], results);
        // console.log("results", results);
      }
      setDataforSearch(results);
    });
  }
  // useEffect(() => {
  //   const results = [];
  //   Object.values(list).map((item) => GetData(item, results));
  // }, [list]);
  // useEffect(() => {
  //   const results=[];
  //       Object.entries(list).map((item) => {
  //     console.log("item", item);
  //     GetData(item, results);
  //   });
  // }, [list]);
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
      // console.log("item", item);
      GetData(item, results);
    });
  }, [list]);
  //
  // function FindMatch() {
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
      setFilteredData((filteredData[el] = filteredList));
      console.log("filteredData", filteredData);
    }
  console.log("filteredData in useEff", filteredData);
    // setFilteredData(filteredList);
  }, [inputSearch]);
  console.log("filteredData", filteredData);
  // console.log("dataforSearch.films", dataforSearch.films);

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
  // console.log("inputSearch in FindData", inputSearch);
  // console.log("filteredData", filteredData);
  // console.log('dataforSearch',dataforSearch);
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
          <li key={item.name || item.title}>
            {" "}
            <NavLink to={`qwe`}>{item.name || item.title} </NavLink>
          </li>
        ))}
        {/* {filteredData.map((item) => (
          <li key={item.name || item.title}>
            {" "}
            <NavLink to={`qwe`}>{item.name || item.title} </NavLink>
          </li>
        ))} */}
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
