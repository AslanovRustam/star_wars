import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import CardList from "./components/cards/cardList";
import NoFoundView from "./components/404/noFoundView";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* </Route> */}
        <Route path=":collection" element={<CardList />} />
        <Route  element={<NoFoundView />}/>
      </Routes>
      {/* <Outlet/> */}
      <Footer />
    </>
  );
}

export default App;
