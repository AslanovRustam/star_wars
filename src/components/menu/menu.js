import { NavLink } from "react-router-dom";
import styles from "./menu.module.css";
import logo from "../../images/logo.png";

export default function Menu({ list, active, setActive }) {
  return (
    <div className={active ? styles.menuActive : styles.menu} onClick={() => setActive(!active)}>
      <div className={styles.blur}></div>
      <div className={styles.content}>
        <NavLink to="/">
          <img className={styles.logo} src={logo} alt="logo"></img>
        </NavLink>
        <ul className={styles.list}>
          {list.map((item) => (
            <li key={item.title}>
              <NavLink to={`/${item.title}`} className={styles.navItem}>
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
