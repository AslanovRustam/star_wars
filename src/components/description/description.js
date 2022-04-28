import { useParams, NavLink } from "react-router-dom";
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
  }, [id, collection]);
  // console.log("data", data);

  return (
    <>
      {loading ? (
        <div className={styles.loading}>
          <span>Loading...</span>
          <img className={styles.img} src={Loading} alt='Loading'></img>
        </div>
      ) : (
        <section className={styles.container}>
          <div className={styles.title}>
            <div>{data.title || data.name}</div>
          </div>
          <div className={styles.list}>
            {data.director && (
              <span className={styles.content}>
                {" "}
                Director : {data.director}
              </span>
            )}
            {data.producer && (
              <span className={styles.content}>
                Producers : {data.producer}
              </span>
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
                <li className={styles.titleList}>Planets :&nbsp;</li>
                {data?.planets?.map((planet) => (
                  <li key={planet} className={styles.accordionList}>
                    <SingleItem dataItem={planet} />
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
              <span className={styles.content}>
                Population {data.population}
              </span>
            )}
            {data.gravity && (
              <span className={styles.content}>Gravity {data.gravity}</span>
            )}
            {data.terrain && (
              <span className={styles.content}>Terrain {data.terrain}</span>
            )}
            {data.diameter && (
              <span className={styles.content}>Diameter {data.diameter}</span>
            )}
            {data.orbital_period && (
              <span className={styles.content}>
                Orbital period {data.orbital_period}
              </span>
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
              <span className={styles.content}>
                Passengers {data.passengers}
              </span>
            )}
            {data.starship_class && (
              <span className={styles.content}>
                Starship class {data.starship_class}
              </span>
            )}
            {data.manufacturer && (
              <span className={styles.content}>
                Manufacturer {data.manufacturer}
              </span>
            )}
            {data.height && (
              <span className={styles.content}>Height {data.height}</span>
            )}
            {data.mass && (
              <span className={styles.content}>Weight {data.mass}</span>
            )}
            {data.eye_color && (
              <span className={styles.content}>Eye color {data.eye_color}</span>
            )}
            {data.hair_color && (
              <span className={styles.content}>
                Hair color {data.hair_color}
              </span>
            )}

            {data.cargo_capacity && (
              <span className={styles.content}>
                Cargo capacity {data.cargo_capacity}
              </span>
            )}
            {data.vehicle_class && (
              <span className={styles.content}>
                Vehicle class {data.vehicle_class}
              </span>
            )}
                   {data.cost_in_credits && (
              <span className={styles.content}>
                Cost in credits {data.cost_in_credits}
              </span>
            )}
               {data.length && (
              <span className={styles.content}>Length {data.length}</span>
            )}
               {data.max_atmosphering_speed && (
              <span className={styles.content}>Max atmosphering speed {data.max_atmosphering_speed}</span>
            )}
          {data.pilots && (
              <ul className={styles.contentList}>
                <li className={styles.titleList}>Pilots :&nbsp;</li>
                {data?.pilots?.map((pilot) => (
                  <li key={pilot} className={styles.accordionList}>
                    <SingleItem dataItem={pilot} />
                  </li>
                ))}
              </ul>
            )}
            {data.species && (
              <ul className={styles.contentList}>
                <li className={styles.titleList}>Species :&nbsp;</li>
                {data?.species?.map((space) => (
                  <li key={space} className={styles.accordionList}>
                    <SingleItem dataItem={space} />
                  </li>
                ))}
              </ul>
            )}
            {data.characters && (
              <ul className={styles.contentList}>
                <li className={styles.titleList}>Characters :&nbsp;</li>
                {data?.characters?.map((character) => (
                  <li key={character} className={styles.accordionList}>
                    <SingleItem dataItem={character} />
                  </li>
                ))}
              </ul>
            )}
            {data.starships && (
              <ul className={styles.contentList}>
                <li className={styles.titleList}>Starships :&nbsp;</li>
                {data?.starships?.map((starship) => (
                  <li key={starship} className={styles.accordionList}>
                    <SingleItem dataItem={starship} />
                  </li>
                ))}
              </ul>
            )}
            {data.vehicles && (
              <ul className={styles.contentList}>
                <li className={styles.titleList}>Vehicles :&nbsp;</li>
                {data?.vehicles?.map((vehicles) => (
                  <li key={vehicles} className={styles.accordionList}>
                    <SingleItem dataItem={vehicles} />
                  </li>
                ))}
              </ul>
            )}
            {data.residents && (
              <ul className={styles.contentList}>
                <li className={styles.titleList}>Residents:&nbsp;</li>
                {data?.residents?.map((resident) => (
                  <li key={resident} className={styles.accordionList}>
                    <SingleItem dataItem={resident} />
                  </li>
                ))}
              </ul>
            )}
            {data.films && (
              <ul className={styles.contentList}>
                <li className={styles.titleList}>Films:&nbsp;</li>
                {data?.films?.map((film) => (
                  <li key={film} className={styles.accordionList}>
                    <SingleItem dataItem={film} />
                  </li>
                ))}
              </ul>
            )}
          </div>
          <NavLink to={`/${collection}`} className={styles.button}> Back to {collection}</NavLink>
        </section>
      )}
    </>
  );
}
