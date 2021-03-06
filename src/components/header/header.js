import { useState } from "react";
import Menu from "../menu/menu";
import styles from "./header.module.css";
import logo from "../../images/logo.png";

export default function Header({ list }) {
  const [menuActive, setMenuActive] = useState(false);
  return (
    <header className={styles.container}>
      <img
        className={styles.logo}
        src={logo}
        alt="logo"
        onClick={() => setMenuActive(!menuActive)}
      ></img>
      <Menu list={list} active={menuActive} setActive={setMenuActive} />
    </header>
  );
}
