import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import CardList from "./components/cards/cardList";
import NoFoundView from "./components/404/noFoundView";
import Description from "./components/description/description";
import Films from "./images/films2.jpg";
import People from "./images/people.png";
import Planet from "./images/planet2.png";
import Species from "./images/various.jpg";
import Starships from "./images/starships.png";
import Vehicles from "./images/vechicles2.png";
import "./App.css";

const list = [
  { title: "films", img: `${Films}` },
  { title: "people", img: `${People}` },
  { title: "planets", img: `${Planet}` },
  { title: "species", img: `${Species}` },
  { title: "starships", img: `${Starships}` },
  { title: "vehicles", img: `${Vehicles}` },
];

function App() {
  return (
    <>
      <Header list={list} />
      <Routes>
        <Route path="/" element={<Main list={list}/>} />
        <Route path=":collection" element={<CardList />}></Route>
        <Route path=":collection/:id" element={<Description />} />
        <Route element={<NoFoundView />} />
      </Routes>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
