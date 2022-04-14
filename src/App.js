import { Routes, Route, Outlet } from "react-router-dom";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import CardList from "./components/cards/cardList";
import NoFoundView from "./components/404/noFoundView";
import Description from "./components/description/description";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        {/* </Route> */}
        {/* <Route path=":collection" element={<CardList />} /> */}
        <Route path=":collection" element={<CardList />}></Route>
        <Route path="qwe" element={<Description />} />
        <Route element={<NoFoundView />} />
      </Routes>
      <Outlet/>
      <Footer />
    </>
  );
}

export default App;
