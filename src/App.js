import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import CardList from "./components/cards/cardList";
import NoFoundView from "./components/404/noFoundView";
import Description from "./components/description/description";
import Films from "./images/films3.jpg";
import People from "./images/people3.jpg";
import Planet from "./images/planet4.jpg";
import Species from "./images/various.jpg";
import Starships from "./images/starships3.jpg";
import Vehicles from "./images/vehicles3.jpg";
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
        <Route path=":collection" element={<CardList />}/>
        <Route path=":collection/:id" element={<Description />} />
        <Route  path="*" element={<NoFoundView />} />
      </Routes>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
// "homepage": "https://AslanovRustam.github.io/star_wars",