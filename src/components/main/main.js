import { useState, useEffect } from "react";
import { Routes, Route, NavLink, useParams } from "react-router-dom";
import {
  BrowserRouter,
  HashRouter,
  Link,
  MemoryRouter,
  Navigate,
  NavigationType,
  Outlet,
  Router,
  UNSAFE_LocationContext,
  UNSAFE_NavigationContext,
  UNSAFE_RouteContext,
  createPath,
  createRoutesFromChildren,
  createSearchParams,
  generatePath,
  matchPath,
  matchRoutes,
  parsePath,
  renderMatches,
  resolvePath,
  unstable_HistoryRouter,
  useHref,
  useInRouterContext,
  useLinkClickHandler,
  useLocation,
  useMatch,
  useNavigate,
  useNavigationType,
  useOutlet,
  useOutletContext,
  useResolvedPath,
  useRoutes,
  useSearchParams,
} from "react-router-dom";
import styles from "./main.module.css";
import Films from "../../images/films2.jpg";
import People from "../../images/people.png";
import Planet from "../../images/planet2.png";
import Species from "../../images/various.jpg";
import Starships from "../../images/starships.png";
import Vehicles from "../../images/vechicles2.png";
import Slider from "../slider/slider";

export default function Main() {
  const list = [
    { title: "films", img: `${Films}` },
    { title: "people", img: `${People}` },
    { title: "planets", img: `${Planet}` },
    { title: "species", img: `${Species}` },
    { title: "starships", img: `${Starships}` },
    { title: "vehicles", img: `${Vehicles}` },
  ];

  return (
      <Slider list={list}/>
    // <ul className={styles.list}>
    //   {list &&
    //     list.map((item) => {
    //       return (
    //         <li className={styles.item} key={item.title}>
    //           <NavLink to={`/${item.title}`} className={styles.navItem}>
    //             {item.title}
    //             <img className={styles.img} src={item.img}></img>
    //           </NavLink>
    //         </li>
    //       );
    //     })}
    // </ul>
  );
}

{
  /* <iframe
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
                  ></iframe> */
}

