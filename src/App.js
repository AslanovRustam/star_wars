import { Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Main from "./components/main/main";
import Footer from "./components/footer/footer";
import "./App.css";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main />}/>       
      </Routes>
      <Footer />
    </>
  );
}

export default App;
