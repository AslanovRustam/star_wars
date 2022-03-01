import { useState, useEffect } from "react";
import styles from "./main.module.css";
import {
  fetchFilms,
  fetchPeople,
  fetchPlanets,
  fetchSpecies,
  fetchStarships,
  fetchVehicles,
} from "../../api/getFetch";

export default function Main() {
  const [films, setFilms] = useState([]);
  const [people, setPeople] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarships] = useState([]);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    fetchFilms().then((request) => setFilms(request.results));
  }, []);
  useEffect(() => {
    fetchPeople().then((request) => setPeople(request));
  }, []);
  useEffect(() => {
    fetchPlanets().then((request) => setPlanets(request));
  }, []);
  useEffect(() => {
    fetchSpecies().then((request) => setSpecies(request));
  }, []);
  useEffect(() => {
    fetchStarships().then((request) => setStarships(request));
  }, []);
  useEffect(() => {
    fetchVehicles().then((request) => setVehicles(request));
  }, []);
  console.log("films", films);
  console.log("people", people);
  console.log("planets", planets);
  console.log("species", species);
  console.log("starships", starships);
  console.log("vehicles", vehicles);

  return (
    <>
      {/* <video width="480" autoplay controls>
        <source
          src="https://www.youtube.com/watch?v=tYSbIKgYWdw&ab_channel=%D0%9F%D0%B0%D0%BB%D0%B8%D1%82%D1%80%D0%B0"
        //   type="video/mp4"
        />
      </video> */}
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tYSbIKgYWdw"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <ul>
        <li className={styles.item}>films</li>
        <li className={styles.item}>people</li>
        <li className={styles.item}>planets</li>
        <li className={styles.item}>species</li>
        <li className={styles.item}>starships</li>
        <li className={styles.item}>vehicles</li>
      </ul>
    </>
    // <ul>
    //   {films &&
    //     films.map((film) => (
    //       <li key={film.title}>
    //         <h2>{film.title}</h2>
    //         <span>{film.opening_crawl}</span>
    //       </li>
    //     ))}
    // </ul>
  );
}
