import { useState, useEffect } from "react";
import { Routes, Route, NavLink } from "react-router-dom";
import styles from "./main.module.css";
import {
  fetchFilms,
  fetchPeople,
  fetchPlanets,
  fetchSpecies,
  fetchStarships,
  fetchVehicles,
} from "../../api/getFetch";
import Films from "../../images/films.png";
import People from "../../images/people.png";
import Planet from "../../images/planet2.png";
import Species from "../../images/species.png";
import Starships from "../../images/starships.png";
import Vehicles from "../../images/vehicles.png";

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
  const list = [
    { title: "films", img: `${Films}` },
    { title: "people", img: `${People}` },
    { title: "planets", img: `${Planet}` },
    { title: "species", img: `${Species}` },
    { title: "starships", img: `${Starships}` },
    { title: "vehicles", img: `${Vehicles}` },
  ];

  return (
    <>
      {/* <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/tYSbIKgYWdw?modestbranding=1"
        title="YouTube video player"
        srcDoc="<style>*{padding:0;margin:0;overflow:hidden}
    html,body{height:100%}
    img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}
    span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}
    </style>
    <a href=https://www.youtube.com/embed/tYSbIKgYWdw?modestbranding=1>
    <img src=https://img.youtube.com/vi/li_9PBrcOcQ/hqdefault.jpg alt='Demo video'>
    <span>▶</span>
    </a>"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe> */}
      <ul>
        {list &&
          list.map((item) => {
            return (
              <li className={styles.item} key={item.title}>
                <NavLink to={`/${item.title}`} >{item.title}
                <img src={item.img}></img></NavLink>
              </li>
            );
          })}
      </ul>
    </>
  );
}
