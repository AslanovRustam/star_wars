import { NavLink } from "react-router-dom";
import styles from "./slider.module.css";

export default function SliderList({ activeIndex, sliderList }) {
  return (
    <section>
      {sliderList.map((item, index) => (
        <div className={index === activeIndex ? styles.active: styles.inActive} key={index}>
          <NavLink to={`/${item.title}`} className={styles.navItem}>
            {item.title}
            <img className={styles.img} src={item.img}></img>
          </NavLink>
        </div>
      ))}
    </section>
  );
}
