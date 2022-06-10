import { useState, useRef } from "react";
import SingleItem from "../singleitem/singleitem";
import styles from "./accordion.module.css";

export default function Accordion({ item }) {
  const [isActive, setIsActive] = useState(false);
  const [height, setIHeight] = useState("0px");
  const content = useRef(null)

function toggleAccordion(){
  setIsActive(!isActive);
  setIHeight(isActive?"0px" :`${content.current.scrollHeight}px`)
  // console.log('content.current.scrollHeight',content.current.scrollHeight);
}
  return (
    <div className={styles.accordion}>
      <div className={styles.title} onClick={toggleAccordion}>
        <div>{item.title || item.name}</div>
        <div>{isActive ? "-" : "+"}</div>
      </div>
      {/* //////REF и max-height!!!///// */}
        <div ref={content} style={{maxHeight:`${height}`}} className={styles.list}>
          {item.director && (
            <span className={styles.content}> Director : {item.director}</span>
          )}
          {item.producer && (
            <span className={styles.content}>Producers : {item.producer}</span>
          )}
          {item.release_date && (
            <span className={styles.content}>
              Release date : {item.release_date}
            </span>
          )}
          {item.opening_crawl && (
            <span className={styles.content}>{item.opening_crawl}</span>
          )}
          {item.planets && (
            <ul className={styles.contentList}>
              <li className={styles.titleList}>Planets :&nbsp;</li>
              {item?.planets?.map((planet) => (
                <li key={planet} className={styles.accordionList}>
                  <SingleItem dataItem={planet} />
                </li>
              ))}
            </ul>
          )}
          {item.characters && (
            <ul className={styles.contentList}>
              <li className={styles.titleList}>Characters :&nbsp;</li>
              {item?.characters?.map((character) => (
                <li key={character} className={styles.accordionList}>
                  <SingleItem dataItem={character} />
                </li>
              ))}
            </ul>
          )}
          {item.gender && (
            <span className={styles.content}>Gender - {item.gender}</span>
          )}
          {item.birth_year && (
            <span className={styles.content}>Born {item.birth_year}</span>
          )}
          {item.homeworld && (
            <span className={styles.content}>
              Home planet <SingleItem dataItem={item.homeworld} />
            </span>
          )}
          {item.climate && (
            <span className={styles.content}>Climate {item.climate}</span>
          )}
          {item.population && (
            <span className={styles.content}>Population {item.population}</span>
          )}
          {item.gravity && (
            <span className={styles.content}>Gravity {item.gravity}</span>
          )}
          {item.terrain && (
            <span className={styles.content}>Terrain {item.terrain}</span>
          )}
                    {item.model && (
            <span className={styles.content}>Model {item.model}</span>
          )}
          {item.classification && (
            <span className={styles.content}>
              Classification {item.classification}
            </span>
          )}
          {item.designation && (
            <span className={styles.content}>
              Designation {item.designation}
            </span>
          )}
          {item.language && (
            <span className={styles.content}>Language {item.language}</span>
          )}
            {item.crew && (
            <span className={styles.content}>Crew {item.crew}</span>
          )}
            {item.passengers && (
            <span className={styles.content}>Passengers {item.passengers}</span>
          )}
            {item.starship_class && (
            <span className={styles.content}>Starship class {item.starship_class}</span>
          )}
              {item.manufacturer && (
            <span className={styles.content}>Manufacturer {item.manufacturer}</span>
          )}
              {item.cargo_capacity && (
            <span className={styles.content}>Cargo capacity {item.cargo_capacity}</span>
          )}
              {item.vehicle_class && (
            <span className={styles.content}>Vehicle class {item.vehicle_class}</span>
          )}
      
          {item.residents && (
            <ul className={styles.contentList}>
              <li className={styles.titleList}>Residents :&nbsp;</li>
              {item?.residents?.map((resident) => (
                <li key={resident} className={styles.accordionList}>
                  <SingleItem dataItem={resident} />
                </li>
              ))}
            </ul>
          )}
          {item.films && (
            <ul className={styles.contentList}>
              <li className={styles.titleList}>Films :&nbsp;</li>
              {item?.films?.map((film) => (
                <li key={film} className={styles.accordionList}>
                  <SingleItem dataItem={film} />
                </li>
              ))}
            </ul>
          )}
                    {item.people && (
            <ul className={styles.contentList}>
              <li className={styles.titleList}>People :&nbsp;</li>
              {item?.people?.map((person) => (
                <li key={person} className={styles.accordionList}>
                  <SingleItem dataItem={person} />
                </li>
              ))}
            </ul>
          )}
        </div>
    </div>
  );
}
