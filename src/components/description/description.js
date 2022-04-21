import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { fetchList } from "../../api/getFetch";
import Loading from "../../images/loadingBig2.gif";
import SingleItem from "../singleitem/singleitem";
import styles from "./descripion.module.css";
// import Card from "./card";

export default function Description() {
  let params = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);

  let id = params.id;
  let collection = params.collection;

  useEffect(() => {
    setLoading(true);
    fetchList(`${collection}/${id}`).then((request) => {
      setData(request);
      setLoading(false);
    });
  }, [id,collection]);
  console.log("data", data);

  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <span>Loading...</span>
          <img className={styles.img} src={Loading}></img>
        </div>
      ) : (
        <section className={styles.container}>
             <div className={styles.title} >
        <div>{data.title || data.name}</div>
      </div>
        <div className={styles.list}>
          {data.director && (
            <span className={styles.content}> Director : {data.director}</span>
          )}
          {data.producer && (
            <span className={styles.content}>Producers : {data.producer}</span>
          )}
          {data.release_date && (
            <span className={styles.content}>
              Release date : {data.release_date}
            </span>
          )}
          {data.opening_crawl && (
            <span className={styles.content}>{data.opening_crawl}</span>
          )}
          {data.planets && (
            <ul className={styles.contentList}>
              <li className={styles.titleList}>Planets : </li>
              {data?.planets?.map((planet) => (
                <li key={planet} className={styles.accordionList}>
                  <SingleItem dataItem={planet} />
                </li>
              ))}
            </ul>
          )}
          {data.characters && (
            <ul className={styles.contentList}>
              <li className={styles.titleList}>Characters : </li>
              {data?.characters?.map((character) => (
                <li key={character} className={styles.accordionList}>
                  <SingleItem dataItem={character} />
                </li>
              ))}
            </ul>
          )}
          {data.gender && (
            <span className={styles.content}>Gender - {data.gender}</span>
          )}
          {data.birth_year && (
            <span className={styles.content}>Born {data.birth_year}</span>
          )}
          {data.homeworld && (
            <span className={styles.content}>
              Home planet <SingleItem dataItem={data.homeworld} />
            </span>
          )}
          {data.climate && (
            <span className={styles.content}>Climate {data.climate}</span>
          )}
          {data.population && (
            <span className={styles.content}>Population {data.population}</span>
          )}
          {data.gravity && (
            <span className={styles.content}>Gravity {data.gravity}</span>
          )}
          {data.terrain && (
            <span className={styles.content}>Terrain {data.terrain}</span>
          )}
                    {data.model && (
            <span className={styles.content}>Model {data.model}</span>
          )}
          {data.classification && (
            <span className={styles.content}>
              Classification {data.classification}
            </span>
          )}
          {data.designation && (
            <span className={styles.content}>
              Designation {data.designation}
            </span>
          )}
          {data.language && (
            <span className={styles.content}>Language {data.language}</span>
          )}
            {data.crew && (
            <span className={styles.content}>Crew {data.crew}</span>
          )}
            {data.passengers && (
            <span className={styles.content}>Passengers {data.passengers}</span>
          )}
            {data.starship_class && (
            <span className={styles.content}>Starship class {data.starship_class}</span>
          )}
              {data.manufacturer && (
            <span className={styles.content}>Manufacturer {data.manufacturer}</span>
          )}
              {data.cargo_capacity && (
            <span className={styles.content}>Cargo capacity {data.cargo_capacity}</span>
          )}
              {data.vehicle_class && (
            <span className={styles.content}>Vehicle class {data.vehicle_class}</span>
          )}
      
          {data.residents && (
            <ul className={styles.contentList}>
              <li className={styles.titleList}>Residents: </li>
              {data?.residents?.map((resident) => (
                <li key={resident} className={styles.accordionList}>
                  <SingleItem dataItem={resident} />
                </li>
              ))}
            </ul>
          )}
          {data.films && (
            <ul className={styles.contentList}>
              <li className={styles.titleList}>Films: </li>
              {data?.films?.map((film) => (
                <li key={film} className={styles.accordionList}>
                  <SingleItem dataItem={film} />
                </li>
              ))}
            </ul>
          )}
        </div>
      
        </section>
      )}
    </>
  );
}
