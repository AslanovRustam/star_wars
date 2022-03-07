import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import CardList from "./components/cards/cardList";
import "./App.css";

function App() {

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}>
        </Route>
          <Route path=':collection' element={<CardList />}/>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
